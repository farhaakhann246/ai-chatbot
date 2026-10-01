import { config } from "../config/index.js";

import {   generateMockAnswer } from "../providers/llm/mock.llm.js";

import {  generateOpenAIAnswer } from "../providers/llm/openai.llm.js";

export async function generateAnswer(messages) {
  if (!Array.isArray(messages)) {
    throw new Error("Messages must be an array.");
  }

  if (config.llmProvider === "mock") {
    return generateMockAnswer(messages);
  }

  if (config.llmProvider === "openai") {
    return generateOpenAIAnswer(messages);
  }

  throw new Error(
    `Unsupported LLM provider: ${config.llmProvider}`
  );
}