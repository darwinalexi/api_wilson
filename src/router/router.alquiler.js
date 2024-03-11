import { Router } from "express";
import { createalqulerDAG, delete_alquilers_for_id_DAG, show_all_alquilersDAG, show_alquilers_for_id_DAG, update_alquilers_for_id_DAG } from "../controllers/alquilerDAG.js";

export const rutaalqulierDAG=Router()
rutaalqulierDAG.post("/crearalquilerDAG", createalqulerDAG)
rutaalqulierDAG.get("/listaralquilerDAG", show_all_alquilersDAG)
rutaalqulierDAG.get("/buscaralqulerDAG/:_id", show_alquilers_for_id_DAG)
rutaalqulierDAG.put("/actualizaralquilerDAG/:_id", update_alquilers_for_id_DAG);
rutaalqulierDAG.delete("/eliminaralquilerDAG/:_id", delete_alquilers_for_id_DAG);

