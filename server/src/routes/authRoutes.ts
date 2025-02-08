import express  from "express";
import trycatch from "../utils/trycatch";
import { login , register } from "../controllers/auth/authController";
const router = express.Router();

router
.post("/register",trycatch(register))
.post("/login",trycatch(login))
export default router
