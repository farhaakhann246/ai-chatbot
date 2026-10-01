import OpenAI from "openai";
import { config } from "../../config/index.js";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function generateOpenAIAnswer(messages) {
  if (!Array.isArray(messages)) {
    throw new Error("Messages must be an array.");
  }

  const response = await openai.responses.create({
    model: config.openAIModel,
    input: messages
  });

  return {
    answer: response.output_text
  };
}