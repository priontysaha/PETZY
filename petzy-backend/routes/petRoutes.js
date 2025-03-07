import express from "express";
import { showInterest } from "../Controllers/showInterestController.js";

const router = express.Router();

// Route to save pet interest
router.post("/show-interest", showInterest);

export default router;
