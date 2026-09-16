import { Router } from "express";
import { getCheck } from "../controller/apiCheck.controller.js";

const router = Router()

router.get("/", getCheck)

export default router;