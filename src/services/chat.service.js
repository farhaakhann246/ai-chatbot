import { validateQuery } from "../utils/validation.util.js";
import { generateAnswer } from "./llm.service.js";

export async function chat(query, conversation = []) {
  const normalizedQuery = validateQuery(query);

  if (!Array.isArray(conversation)) {
    throw new Error( "Conversation must be an array." );
  }

  const messages = [
    {
      role: "system",
      content: "You are a helpful AI assistant. Answer clearly and accurately."
    },

    ...conversation,

    {
      role: "user",
      content: normalizedQuery
    }
  ];

  const result = await generateAnswer(messages);

  return {
    query: normalizedQuery,
    answer: result.answer
  };
}