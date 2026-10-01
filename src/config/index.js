import "dotenv/config";

const allowedProviders = ["mock", "openai"];

function validateProvider(value) {
  if (!allowedProviders.includes(value)) {
    throw new Error(
      `Invalid LLM_PROVIDER "${value}". ` +
      `Allowed values: ${allowedProviders.join(", ")}`
    );
  }

  return value;
}

function validatePort(value) {
  const port = Number(value || 3000);

  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error("PORT must be a valid port number.");
  }

  return port;
}

const llmProvider = validateProvider(
  process.env.LLM_PROVIDER || "mock"
);

const port = validatePort(process.env.PORT);

const openAIModel =  process.env.OPENAI_MODEL || "gpt-4.1-mini";

if ( llmProvider === "openai" && !process.env.OPENAI_API_KEY) {
  throw new Error(
    "OPENAI_API_KEY is required when LLM_PROVIDER=openai."
  );
}

export const config = { port, llmProvider, openAIModel };