import { GoogleGenerativeAI } from "@google/generative-ai";

// === API Setup ===
const API_KEY = "AIzaSyCt3g-4SFgJLkH4pSgodkSMx2pvgDNtAgk"; // 🔒 Replace with your own key
const MODEL_NAME = "models/gemini-1.5-flash-001-tuning";
const genAI = new GoogleGenerativeAI(API_KEY);

// === Exported Histories ===
export const inputHistory: string[] = [];
export const outputHistory: string[] = [];

// === Intent Filter ===
async function isValidMenstruationQuery(query: string): Promise<boolean> {
  const prompt = `
You are a strict intent filter for a menstruation-health chatbot. Reply only with "yes" or "no".

The chatbot ONLY supports queries related to:
- Menstruation health
- Period symptoms (cramps, PMS, irregular periods)
- Reproductive health
- Period tracking
- Hormonal issues linked to menstruation (e.g., hormonal regulation, hormones involved in the menstrual cycle)
- Menstrual hygiene
- Medical concerns around menstruation
- Queries in regional languages written in English (e.g., Telugu, Hindi)

REJECT queries that are:
- About unrelated topics like programming, devices, travel
- General health questions not tied to menstruation
- Vague or off-topic

Query: "${query}"
Answer:
`;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const text = result.response.text().trim().toLowerCase();
    return text === "yes";
  } catch (e) {
    console.error("Intent filter failed:", e);
    return false;
  }
}

// === Clean Response ===
function cleanResponse(raw: string): string {
  const text = raw.trim();
  const disclaimers = [
    "i am not a doctor",
    "i'm not qualified to give medical advice",
    "this is not medical advice",
    "consult a qualified medical professional",
    "i cannot provide medical advice",
  ];
  for (const phrase of disclaimers) {
    if (text.toLowerCase().includes(phrase)) {
      return "If you're experiencing serious symptoms, it's best to consult a doctor for professional guidance.";
    }
  }
  return text;
}

// === Main Chatbot Function ===
export async function askChatbot(query: string): Promise<string> {
  inputHistory.push(query);

  const isAllowed = await isValidMenstruationQuery(query);
  if (!isAllowed) {
    const rejection =
      "⚠ Sorry, I only answer menstruation and menstrual health-related questions. Please keep your query focused on that topic.";
    outputHistory.push(rejection);
    return rejection;
  }

  try {
    const model = genAI.getGenerativeModel({
      model: MODEL_NAME,
      systemInstruction: {
        role: "system",
        parts: [
          {
            text: `You are a friendly and helpful assistant that ONLY answers questions related to menstruation health. 
Always assume terms like 'cycle', 'flow', 'pain', etc., refer to menstruation unless clearly not. 
Avoid medical disclaimers. 
If the user types in Hindi or Telugu using English letters (transliterated), respond in the same style. 
Do NOT use native Telugu or Hindi script. Just reply using English or transliterated regional language.`,
          },
        ],
      },
    });

    const result = await model.generateContent(query);
    const text = result.response.text();
    const cleaned = cleanResponse(text);
    outputHistory.push(cleaned);
    return cleaned;
  } catch (e: any) {
    const error = `⚠ Error occurred: ${e.message}`;
    outputHistory.push(error);
    return error;
  }
}
