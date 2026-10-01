import { chat } from "../services/chat.service.js";

export async function chatController(req, res, next) {
  try {
    const { query, conversation = [] } = req.body;

    const result = await chat( query, conversation );

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}