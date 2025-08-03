import express from 'express';
import { getFacials } from '../controller/facial.controller.js';

const router = express.Router();

router.get("/", getFacials);

export default router;
