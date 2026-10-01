export async function generateMockAnswer(messages) {
  if (!Array.isArray(messages)) {
    throw new Error("Messages must be an array.");
  }

  return {
    answer: "This is a mock AI response. The chatbot architecture is working correctly."
  };
}