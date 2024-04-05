import { Router } from "express";
import {listarInteresesPagados, listar_mes_interes_por_pagar} from "../controllers/consultas.js";

export const routeconsulDAG=Router();

routeconsulDAG.get("/consulta1DAG", listarInteresesPagados)
routeconsulDAG.get("/conSULTA2dag", listar_mes_interes_por_pagar)