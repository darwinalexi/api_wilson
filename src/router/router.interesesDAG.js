import { Router } from "express";
import { createInteresDAG,showDAG,show_for_idDAG, delete_for_idDAG,update_for_idDAG} from "../controllers/interesesDAG.js";
import { validatorinteresonDAG } from "../middlewares/intereses-middleware.js";
export const ruta = Router()

ruta.post("/crearDAG",validatorinteresonDAG,createInteresDAG)
ruta.get("/listarDAG", showDAG)
ruta.get("/buscarDAG/:_id", show_for_idDAG)
ruta.delete("/eliminarDAG/:_id", delete_for_idDAG)
ruta.put("/actualizarDAG/:_id", validatorinteresonDAG,update_for_idDAG )