import { alquiler } from "../model/ModelsAlquilersDAG.js";
import { validationResult } from "express-validator";


export const createalqulerDAG = async (req, res) => {
    try {
//se crea para que muestre los errores
        const error = validationResult(req)

        if (!error.isEmpty()) {
            return res.status(404).json({error})
        }



        const alquilere = await alquiler.create(req.body);
       if (alquilere) {
        res.status(201).json({
            "mensaje": "se creó",
        });
       }else{
        res.status(404).json({
            "mensaje": "algo salio mal",
        });
       }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const show_all_alquilersDAG = async (req, res) => {
    try {
        const alq = await alquiler.find({});
        if (alq) {
            res.status(200).json(alq); 
        } else {
            res.status(404).json({
                "mensaje": "no hay alquileres"
            });
        }
    } catch (error) {
        res.status(500).json({
            "mensaje": error.message
        });
    }
};
export const show_alquilers_for_id_DAG = async (req, res) => {
    try {
        const {_id}=req.params
        const alq = await alquiler.findById(_id);
        if (alq) {
            res.status(200).json(alq); 
        } else {
            res.status(404).json({
                "mensaje": "no hay alquileres con"+_id
            });
        }
    } catch (error) {
        res.status(500).json({
            "mensaje": error.message
        });
    }
};

export const update_alquilers_for_id_DAG = async (req, res) => {
    try {

        const error = validationResult(req)
        if (!error.isEmpty()) {
            return res.status(404).json({error})
        }
        
        const {_id}=req.params
        const alq = await alquiler.findByIdAndUpdate(_id, req.body, {new:true});
        if (!alq) {
            return res.status(404).json({
                "mensaje": "no se encontró un alquiler para actualizar"
            });
        }
        res.status(200).json({
            "mensaje": "Alquiler actualizado exitosamente",
        });
    } catch (error) {
        res.status(500).json({
            "mensaje": error.message
        });
    }
};
export const delete_alquilers_for_id_DAG = async (req, res) => {
    try {
        const {_id}=req.params
        const alq = await alquiler.findByIdAndDelete(_id);
        if (!alq) {
            return res.status(404).json({
                "mensaje": "no se encontró un alquiler para eliminar"
            });
        }
        res.status(200).json({
            "mensaje": "alquilre eliminado exitosamente",
        });
    } catch (error) {
        res.status(500).json({
            "mensaje": error.message
        });
    }
};


