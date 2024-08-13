import { NextResponse } from 'next/server' // Import NextResponse from Next.js for handling responses
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);


// Gemini model with systemInstruction
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});


export async function POST(req) {
    /*const result = await model.generateContent('Given the phrase "' + req + '" give me two colour hex codes seperated by commas, the first should be the text color and the second should be the background color.')
*/
    console.log(req)
    return null;
  /*return new NextResponse(result.response.text);*/
}