import { Router } from "express";
import { createarticlesDAG, delete_article_for_id, show_all_articlesDAG, show_articlesDAG_for_id, update_article_for_idDAG } from "../controllers/articulosDAG.js";
import { validatorrticleDAG } from "../middlewares/articuloDAG.middleware.js";

export const routeArcticleDAG = Router()
routeArcticleDAG.post("/creararticuloDAG", validatorrticleDAG,createarticlesDAG)
routeArcticleDAG.get("/listararticuloDAG",show_all_articlesDAG)
routeArcticleDAG.get("/buscararticuloDAG/:_id", show_articlesDAG_for_id)
routeArcticleDAG.put("/actualizararticuloDAG/:_id", validatorrticleDAG,update_article_for_idDAG)
routeArcticleDAG.delete("/borrararticuloDAG/:_id", delete_article_for_id)