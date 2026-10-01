export function validateQuery(query) {
  if (typeof query !== "string") {
    throw new Error("Query must be a string.");
  }

  const normalizedQuery = query.trim();

  if (!normalizedQuery) {
    throw new Error("Query cannot be empty.");
  }

  if (normalizedQuery.length > 4000) {
    throw new Error(
      "Query cannot exceed 4000 characters."
    );
  }

  return normalizedQuery;
}