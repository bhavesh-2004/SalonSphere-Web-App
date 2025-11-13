import express from 'express';
import { getGroomPackages } from '../controller/groom.controller.js';

const router = express.Router();

router.get("/", getGroomPackages);

export default router;
