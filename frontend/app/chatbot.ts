import axios from 'axios';

// === Exported Histories ===
export const inputHistory: string[] = [];
export const outputHistory: string[] = [];

// === Hardcoded API Config ===
const API_KEY = "AIzaSyAVdcuj6-J7nVEGr4Bln7sOmNNmjoEXOec";
const MODEL_NAME = "tunedModels/updateddataset-ms8r35zajo9m";

// === Intent Filter ===
async function isValidMenstruationQuery(query: string): Promise<boolean> {
  const prompt = `
You are a strict intent filter for a menstruation and pregnancy health chatbot. Reply only with "yes" or "no".

The chatbot ONLY supports queries related to:
- Menstruation health
- Period symptoms (cramps, PMS, irregular periods)
- Reproductive health 
- Period tracking
- Hormonal issues linked to menstruation
- Menstrual hygiene
- Medical concerns around menstruation
- Pregnancy and fertility (e.g., signs of pregnancy, ovulation, pregnancy myths)
- Queries in regional languages written in English (e.g., Telugu, Hindi)

REJECT queries that are:
- About unrelated topics like programming, travel, etc.
- General health questions not tied to menstruation or pregnancy

Query: "${query}"
Answer:
`;

  try {
    const res = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
      {
        contents: [{ parts: [{ text: prompt }] }],
      }
    );

    const answer = res.data.candidates?.[0]?.content?.parts?.[0]?.text?.trim().toLowerCase();
    return answer === 'yes';
  } catch (err: any) {
    console.error("Intent detection failed:", err.response?.data || err.message || err);
    return false;
  }
}

// === Response Cleaner ===
function cleanResponse(text: string): string {
  const disclaimers = [
    "i am not a doctor", "i'm not qualified to give medical advice",
    "this is not medical advice", "consult a qualified medical professional",
    "i cannot provide medical advice"
  ];
  for (const phrase of disclaimers) {
    if (text.toLowerCase().includes(phrase)) {
      return "If you're experiencing serious symptoms, it's best to consult a doctor for professional guidance.";
    }
  }
  return text.trim();
}

// === Ask Chatbot (exported) ===
export async function askChatbot(query: string): Promise<string> {
  const valid = await isValidMenstruationQuery(query);

  if (!valid) {
    return "⚠ Sorry, I only answer menstruation, pregnancy, and reproductive health-related questions. Please keep your query focused on those topics.";
  }

  try {
    const res = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/${MODEL_NAME}:generateContent?key=${API_KEY}`,
      {
        contents: [{ parts: [{ text: query }] }],
        safetySettings: [
          { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
          { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
          { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
          { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" },
        ],
      }
    );

    const raw = res.data.candidates?.[0]?.content?.parts?.[0]?.text || "";
    return cleanResponse(raw);
  } catch (err: any) {
    console.error("Chatbot error:", err.response?.data || err.message || err);
    return `⚠ Error generating response: ${err.message}`;
  }
}
