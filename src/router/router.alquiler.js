import { Router } from "express";
import { createalqulerDAG, delete_alquilers_for_id_DAG, show_all_alquilersDAG, show_alquilers_for_id_DAG, update_alquilers_for_id_DAG } from "../controllers/alquilerDAG.js";
import { validatoralquilerDAG } from "../middlewares/alquiler.middleware.js";
import { validarToken } from "../controllers/Auth.js";


export const rutaalqulierDAG=Router()
rutaalqulierDAG.post("/crearalquilerDAG",validatoralquilerDAG,validarToken ,createalqulerDAG)
rutaalqulierDAG.get("/listaralquilerDAG",validarToken,show_all_alquilersDAG)
rutaalqulierDAG.get("/buscaralqulerDAG/:_id",validarToken,show_alquilers_for_id_DAG)
rutaalqulierDAG.put("/actualizaralquilerDAG/:_id", validatoralquilerDAG, update_alquilers_for_id_DAG);
rutaalqulierDAG.delete("/eliminaralquilerDAG/:_id", validarToken,delete_alquilers_for_id_DAG);


