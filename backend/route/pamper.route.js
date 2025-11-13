import express from 'express';
import { getPamperPackages } from '../controller/pamper.controller.js';

const router = express.Router();

router.get("/", getPamperPackages);

export default router;
