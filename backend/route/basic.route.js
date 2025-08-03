import express from 'express';
import { getBasicCuts } from '../controller/basic.controller.js';

const router = express.Router();

router.get("/", getBasicCuts);

export default router;
