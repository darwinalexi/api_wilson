import { Router } from "express";
import { createClienteDAG, showclientesDAG, show_clienteDAG_for_id, delete_for_idDAG, updatecliente_for_idDAG } from "../controllers/clentesDAG.js";
import { validarToken } from "../controllers/Auth.js";
import { validatorclienteDAG } from "../middlewares/cliente.middleware.js";

export const rutaclienteDAG = Router();
rutaclienteDAG.post("/crearClienteDAG", validarToken,validatorclienteDAG, createClienteDAG)
rutaclienteDAG.get("/listarclientesDAG", validarToken,showclientesDAG)
rutaclienteDAG .get("/buscaclienteDAG/:_id", validarToken,show_clienteDAG_for_id)
rutaclienteDAG .delete("/borrarcliente/:_id",validarToken, delete_for_idDAG)
rutaclienteDAG .put("/actualizarclienteDAG/:_id", validarToken,validatorclienteDAG,updatecliente_for_idDAG)