import {ArticulosDAG, articulo} from '../model/ModelsArticulosDAG.js'

export const createarticlesDAG = async (req, res) => {
    try {
        const intereses = await articulo.create(req.body);
        // Si la creación fue exitosa, intereses contendrá el documento creado.
        // No necesitas verificar affectedRows porque Mongoose no lo usa.
        res.status(201).json({
            "mensaje": "se creó",
        });
    } catch (error) {
        // Si hay un error, Mongoose lo lanzará y será capturado aquí.
        res.status(500).json({ message: error.message });
    }
};

export const show_all_articlesDAG = async (req, res) => {
    try {
        const articulos = await articulo.find({});
        if (articulos.length > 0) {
            res.status(200).json(articulos); // Asegúrate de enviar 'articulos' en lugar de 'articulo'
        } else {
            res.status(404).json({
                "mensaje": "no hay articulos"
            });
        }
    } catch (error) {
        res.status(500).json({
            "mensaje": error.message // Corrige 'error+message' a 'error.message'
        });
    }
};

export const show_articlesDAG_for_id = async (req, res) => {
    try {
        const {_id}=req.params
        const articulos = await articulo.findById(_id);
        if (articulos) {
            res.status(200).json(articulos); // Asegúrate de enviar 'articulo' en lugar de 'articulos'
        } else {
            res.status(404).json({
                "mensaje": "no se encontró el artículo"
            });
        }

    } catch (error) {
        res.status(500).json({
            "mensaje": error.message
        });
    }
};

export const update_article_for_idDAG = async (req, res) => {
    try {
        const { _id } = req.params;
        const update_article = await articulo.findByIdAndUpdate(_id, req.body, { new: true });

// para que muestre los intereses actualizados se hace la siguiente peticion
        const fetchdataupdate = await articulo.findById(_id)

        if (!update_article>0) {
            // Si no se encontró el interés para eliminar, envía un mensaje de error
            return res.status(404).json({
                "mensaje": "no se encontró un interés para actualizar"
            });
        }
        // Si el interés fue encontrado y eliminado exitosamente, envía un mensaje de éxito
        res.status(200).json({
            "mensaje": "articulo actualizado exitosamente",
        });
    } catch (error) {
        // Si hay un error, captúralo y envía un mensaje de error
        res.status(500).json({ message: error.message });
    }
};
export const delete_article_for_id = async(req, res)=>{
const {_id}= req.body
const consulta= articulo.findByIdAndDelete(_id)
if (consulta) {
    // Si no se encontró el interés para eliminar, envía un mensaje de error
    return res.status(200).json({
        "mensaje": " se encontró un articulo para eliminar"
    });
}else{
    return res.status(404).json({
        "mensaje": "no se encontró un articulo para eliminar"
    });
}
} 