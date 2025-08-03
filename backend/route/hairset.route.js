import express from "express";
import { getHairSets } from "../controller/hairset.controller.js";

const router = express.Router();

router.get("/", getHairSets);

export default router;
