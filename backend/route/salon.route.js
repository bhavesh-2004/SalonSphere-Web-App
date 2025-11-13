import express from 'express';
import { getSalon } from '../controller/salon.controller.js';


const router = express.Router()


router.get("/", getSalon)

export default router;