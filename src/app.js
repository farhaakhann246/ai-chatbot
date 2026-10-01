import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import chatRoutes from "./routes/chat.routes.js";
import { errorMiddleware } from "./middleware/error.middleware.js";


const app = express();


const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);


app.use(express.json());


app.use( express.static( path.join(__dirname, "../public")));


app.get("/health", (req, res) => {

  res.status(200).json({
    status: "ok"
  });

});


app.use("/api", chatRoutes);


app.use(errorMiddleware);


export default app;