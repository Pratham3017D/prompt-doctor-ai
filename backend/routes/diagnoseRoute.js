import express from "express";
import { diagnosePrompt } from "../controllers/diagnoseController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Diagnose API is working 🚀",
  });
});

router.post("/", diagnosePrompt);

export default router;