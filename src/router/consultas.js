import { Router } from "express";
import {listarInteresesPagados, listar_mes_interes_por_pagar} from "../controllers/consultas.js";

export const routeconsulDAG=Router();

routeconsulDAG.get("/consulta", listarInteresesPagados)
routeconsulDAG.get("/con", listar_mes_interes_por_pagar)