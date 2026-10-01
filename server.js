import app from "./src/app.js";
import { config } from "./src/config/index.js";

// app.listen(config.port, () => {
//   console.log(
//     `AI Chatbot server running on port ${config.port}`
//   );
// });

app.listen(config.port, "0.0.0.0", () => {
  console.log(
    `AI Chatbot server running on port ${config.port}`
  );
});