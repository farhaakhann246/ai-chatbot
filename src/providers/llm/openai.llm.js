import OpenAI from "openai";
import { config } from "../../config/index.js";

function getOpenAIClient() {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error(
      "OPENAI_API_KEY is required when using the OpenAI provider."
    );
  }

  return new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });
}

export async function generateOpenAIAnswer(messages) {
  if (!Array.isArray(messages)) {
    throw new Error("Messages must be an array.");
  }

  const openai = getOpenAIClient();

  const response = await openai.responses.create({
    model: config.openAIModel,
    input: messages
  });

  return {
    answer: response.output_text
  };
}