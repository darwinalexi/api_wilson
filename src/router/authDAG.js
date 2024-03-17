import { Router } from "express";
import {  login, registro_de_user } from "../controllers/Auth.js";

export const rutalogin= Router()

rutalogin.post("/register",registro_de_user )
rutalogin.post("/login", login)