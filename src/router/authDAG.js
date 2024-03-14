import { Router } from "express";
import { login } from "../controllers/authDAG.js";

export const rutalogin= Router()

rutalogin.post("/register",login )