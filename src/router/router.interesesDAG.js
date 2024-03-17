import { Router } from "express";
import { createInteresDAG,showDAG,show_for_idDAG, delete_for_idDAG,update_for_idDAG} from "../controllers/interesesDAG.js";
import { validatorinteresonDAG } from "../middlewares/intereses-middleware.js";
import { validarToken } from "../controllers/Auth.js";
export const ruta = Router()

ruta.post("/crearDAG",validatorinteresonDAG,createInteresDAG, validarToken)
ruta.get("/listarDAG", showDAG, validarToken)
ruta.get("/buscarDAG/:_id", validarToken,show_for_idDAG)
ruta.delete("/eliminarDAG/:_id",validarToken,delete_for_idDAG)
ruta.put("/actualizarDAG/:_id", validatorinteresonDAG,validarToken,update_for_idDAG )