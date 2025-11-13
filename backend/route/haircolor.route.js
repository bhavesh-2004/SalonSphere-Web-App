import express from 'express';
import { getHairColors } from '../controller/haircolor.controller.js';

const router = express.Router();

router.get("/", getHairColors);

export default router;
