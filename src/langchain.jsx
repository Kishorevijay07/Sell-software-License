import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";

const chat = new ChatOpenAI({
  basePath: "https://openrouter.ai/api/v1", // ✅ This is the correct key
  apiKey: import.meta.env.VITE_OPENROUTER_API_KEY, // ✅ Must start with VITE_ if client-side
  modelName: "openai/gpt-4o",
  defaultHeaders: {
    "X-Title": "SoftSell",                   // optional
  },
});

/**
 * Calls GPT-4o through LangChain and OpenRouter
 * @param {string} userMessage
 */
export const getLangchainResponse = async (userMessage) => {
  const messages = [
    new SystemMessage("You are a helpful assistant for customers selling software licenses."),
    new HumanMessage(userMessage),
  ];

  
  const response = await chat.invoke(messages);
  return response.content;
};
