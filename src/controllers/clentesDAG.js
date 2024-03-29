import { validationResult } from 'express-validator'
import Clientes from '../model/modelclienteDAG.js'

export const createClienteDAG = async(req, res)=>{

try {
    const error= validationResult(req)

    if (!error.isEmpty()) {
        return res.status(404).json({error})
    }

    const create = await Clientes.create(req.body)
if (create) {
    res.status(200).json({
        "mensaje":create
    }) 
}else{
    res.status(404).json({
        "mensaje":"algo salio mal"
    })
}
 
} catch (error) {
    res.status(500).json({
        "mensaje":error.message
    })
}
}
export const showclientesDAG = async(req, res)=>{
    try {
        
        const show = await Clientes.find({})
        if (show) {
            res.status(200).json(show)
        }else{
            res.status(404).json({
                "mensaje":"Algo salio mal"
            })
        }
    } catch (error) {
        res.status(500).json({
            "mensaje":error.message
        })
    }
}
export const show_clienteDAG_for_id = async (req, res) => {
    try {
        const {_id}=req.params
        const show = await Clientes.findById(_id);
        if (show) {
            res.status(200).json(show); // Asegúrate de enviar 'articulo' en lugar de 'articulos'
        } else {
            res.status(404).json({
                "mensaje": "no se encontró el cliente"
            });
        }

    } catch (error) {
        res.status(500).json({
            "mensaje": error.message
        });
    }
};
export const delete_for_idDAG = async (req, res) => {
    try {
        const { _id } = req.params;
        const cliente = await Clientes.findByIdAndDelete(_id);

        if (!cliente) {
            // Si no se encontró el interés para eliminar, envía un mensaje de error
            return res.status(404).json({
                "mensaje": "no se encontró un cliente para eliminar"
            });
        }
        // Si el interés fue encontrado y eliminado exitosamente, envía un mensaje de éxito
        res.status(200).json({
            "mensaje": "cliente eliminado exitosamente",
            "cliente": cliente
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updatecliente_for_idDAG = async (req, res) => {
    try {

        const error= validationResult(req)

  if (!error.isEmpty()) {
            // Cambia el código de estado a 400 para errores de validación
            return res.status(400).json({ errors: error.array() });
        }
        const { _id } = req.params;
        const consulta = await Clientes.findByIdAndUpdate(_id, req.body, { new: true });

        if (!consulta) {
            // Si no se encontró el interés para eliminar, envía un mensaje de error
            return res.status(404).json({
                "mensaje": "no se encontró un cliente para actualizar"
            });
        }
        // Si el interés fue encontrado y eliminado exitosamente, envía un mensaje de éxito
        res.status(200).json({
            "mensaje": "cliente actualizado exitosamente",
        });
    } catch (error) {
        // Si hay un error, captúralo y envía un mensaje de error
        res.status(500).json({ message: error.message });
    }
};
