'use client'
import { Box, TextField, Typography, Button } from "@mui/material";
import { useState } from 'react';

export default function Home() {
  
  const [backgcolor, setbgcolor] = useState("#ffffff");
  const [textcolor, settextcolor] = useState("#000000");
  const [choice, setChoice] = useState("");
  const [message, setMessage] = useState("");

  const change = async () => {
    try {
      const response = await fetch('/api/chat', {
        method: "POST",
        body: choice,
      });

      if (response.ok) {
        const data = await response.json(); 

        
        if (data.textcolor && data.bgcolor) {
          settextcolor(data.textcolor);
          setbgcolor(data.bgcolor);
          setMessage(data.message || "Colors updated successfully.");
        } else {
          setMessage("Unexpected response format.");
        }
      } else {
        const errorData = await response.json();
        setMessage(`Failed to fetch theme response: ${errorData.message}`);
      }
    } catch (error) {
      setMessage("An error occurred: " + error.message);
    }
  }

  return (
    <Box sx={{ bgcolor: backgcolor, p: 2 }}>
      <Typography sx={{ color: textcolor, mb: 2 }}>
        Welcome to the Colour Themer. Simply Enter a theme, and the UI will adapt.
      </Typography>
      <Typography sx={{ color: textcolor, mb: 2 }}>
        {message}
      </Typography>
      <TextField
        sx={{ mb: 2, color: textcolor }}
        value={choice}
        onChange={(e) => setChoice(e.target.value)}
        placeholder="Enter a theme"
      />
      <Button variant="contained" onClick={change}>
        Change UI
      </Button>
    </Box>
  );
}
