import { validationResult } from "express-validator";
import Intereses from "../model/ModelinteresesDAG.js";

//se crea lo interes 
export const createInteresDAG = async (req, res) => {

    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(404).json({error})
    }

    try {
        const intereses = await Intereses.create(req.body);
        // Si la creación fue exitosa, intereses contendrá el documento creado.
        // No necesitas verificar affectedRows porque Mongoose no lo usa.
        res.status(201).json({
            "mensaje": "se creó",
            "interes": intereses // Opcional: incluir el documento creado en la respuesta
        });
    } catch (error) {
        // Si hay un error, Mongoose lo lanzará y será capturado aquí.
        res.status(500).json({ message: error.message });
    }
};
//se listan todos los intereses
export const showDAG = async (req, res) => {
    try {
        const intereses = await Intereses.find({});
        // Si la creación fue exitosa, intereses contendrá el documento creado.
        // No necesitas verificar affectedRows porque Mongoose no lo usa.
        res.status(201).json({
            "mensaje": "se listo",
            "interes": intereses // Opcional: incluir el documento creado en la respuesta
        });
    } catch (error) {
        // Si hay un error, Mongoose lo lanzará y será capturado aquí.
        res.status(500).json({ message: error.message });
    }
};
export const show_for_idDAG = async (req, res) => {
    try {
        const {_id} =req.params
        const intereses = await Intereses.findById(_id);
        // Si la creación fue exitosa, intereses contendrá el documento creado.
        // No necesitas verificar affectedRows porque Mongoose no lo usa.
        res.status(201).json({
            "mensaje": "se encontro",
            "interes": intereses 
        });
    } catch (error) {
        // Si hay un error, Mongoose lo lanzará y será capturado aquí.
        res.status(500).json({ message: error.message });
    }
};

export const delete_for_idDAG = async (req, res) => {
    try {
        const { _id } = req.params;
        const intereses = await Intereses.findByIdAndDelete(_id);

        if (!intereses) {
            // Si no se encontró el interés para eliminar, envía un mensaje de error
            return res.status(404).json({
                "mensaje": "no se encontró un interés para eliminar"
            });
        }
        // Si el interés fue encontrado y eliminado exitosamente, envía un mensaje de éxito
        res.status(200).json({
            "mensaje": "interés eliminado exitosamente",
            "interes": intereses
        });
    } catch (error) {
        // Si hay un error, captúralo y envía un mensaje de error
        res.status(500).json({ message: error.message });
    }
};

export const update_for_idDAG = async (req, res) => {
    try {
const error = validationResult(req)
if (!error.isEmpty()) {
    return res.status(404).json({error})
}

        const { _id } = req.params;
        const intereses = await Intereses.findByIdAndUpdate(_id, req.body);

// para que muestre los intereses actualizados se hace la siguiente peticion
        const fetchdataupdate = await Intereses.findById(_id)

        if (!intereses) {
            // Si no se encontró el interés para eliminar, envía un mensaje de error
            return res.status(404).json({
                "mensaje": "no se encontró un interés para actualizar"
            });
        }
        // Si el interés fue encontrado y eliminado exitosamente, envía un mensaje de éxito
        res.status(200).json({
            "mensaje": "interés actualizado exitosamente",
        });
    } catch (error) {
        // Si hay un error, captúralo y envía un mensaje de error
        res.status(500).json({ message: error.message });
    }
};
