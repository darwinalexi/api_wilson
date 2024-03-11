import { Router } from "express";
import { createClienteDAG, showclientesDAG, show_clienteDAG_for_id, delete_for_idDAG, updatecliente_for_idDAG } from "../controllers/clentesDAG.js";

export const rutaclienteDAG = Router();
rutaclienteDAG.post("/crearClienteDAG", createClienteDAG)
rutaclienteDAG.get("/listarclientesDAG", showclientesDAG)
rutaclienteDAG .get("/buscaclienteDAG/:_id", show_clienteDAG_for_id)
rutaclienteDAG .delete("/borrarcliente/:_id", delete_for_idDAG)
rutaclienteDAG .put("/actualizarclienteDAG/:_id", updatecliente_for_idDAG)