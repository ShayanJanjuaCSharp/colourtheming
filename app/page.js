import Image from "next/image";
import styles from "./page.module.css";
import { Box, TextField, Typography, Button } from "@mui/material";

export default function Home() {
  
  const [backgcolor, setbgcolor] = useState("#ffffff");
  const [textcolor, settextcolor] = useState("#000000");
  const [choice, setchoice] = useState("");

  const change = async () => {
    const response = await fetch('/api/chat', {
      method: "POST",
      body:
    });

  }

  return (
    <Box sx = {{bgcolor: {backgcolor}}}>
      <Typography sx ={{color: {textcolor}}}>Welcome to the Colour Themer. Simply Enter a theme, and the ui will adapt.</Typography>
      <TextField sx ={{color: {textcolor}}} value={choice}></TextField>
      <Button onClick={change}>Change UI</Button>
    </Box>

  );
}
