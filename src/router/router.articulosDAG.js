import { Router } from "express";
import { createarticlesDAG, delete_article_for_id, show_all_articlesDAG, show_articlesDAG_for_id, update_article_for_idDAG } from "../controllers/articulosDAG.js";
import { validatorrticleDAG } from "../middlewares/articuloDAG.middleware.js";
import { validarToken } from "../controllers/Auth.js";

export const routeArcticleDAG = Router()
routeArcticleDAG.post("/creararticuloDAG", validatorrticleDAG,validarToken,createarticlesDAG)
routeArcticleDAG.get("/listararticuloDAG",show_all_articlesDAG, validarToken)
routeArcticleDAG.get("/buscararticuloDAG/:_id", validarToken,show_articlesDAG_for_id)
routeArcticleDAG.put("/actualizararticuloDAG/:_id", validarToken,validatorrticleDAG,update_article_for_idDAG)
routeArcticleDAG.delete("/borrararticuloDAG/:_id",validarToken,delete_article_for_id)