
import { GoogleGenAI } from "@google/genai";

export async function generateMarketingAudit(businessName: string, industry: string, goals: string) {
  // Initialize Gemini API client
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `You are an expert digital marketing consultant. 
    Provide a concise, high-impact marketing audit and growth strategy for a business with the following details:
    Business Name: ${businessName}
    Industry: ${industry}
    Current Goals: ${goals}
    
    Structure your response as follows:
    1. Opportunity Analysis
    2. Recommended Channels (Ads, SEO, etc.)
    3. Low-hanging Fruit (Quick Wins)
    4. 90-Day Roadmap Summary
    
    Keep it professional, encouraging, and highly actionable.`;

  try {
    // Generate content using the recommended gemini-3-flash-preview model for text tasks
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        temperature: 0.7,
        topP: 0.9,
      }
    });

    // Extract text from the response using the .text property
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I couldn't generate your audit right now. Please try again or contact our team directly!";
  }
}
