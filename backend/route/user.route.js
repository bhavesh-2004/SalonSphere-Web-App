import express from "express";
import { createBooking } from "../controller/user.controller.js";

const router = express.Router();

router.post("/book", createBooking);

export default router;
