
import jwt from 'jsonwebtoken';
import Usuario from '../models/Usuario'; // Asegúrate de importar tu modelo de Usuario

export const register= async (req, res) => {
    try {
        const { correo, clave } = req.body;
        // Verifica si el usuario ya existe
        const usuarioExistente = await Usuario.findOne({ correo });
        if (usuarioExistente) {
            return res.status(400).json({ mensaje: 'El correo ya está en uso' });
        }

        // Crea un nuevo usuario
        const usuario = new Usuario({ correo, clave });
        await usuario.save();

        // Crea un token JWT para el usuario
        const token = jwt.sign({ _id: usuario._id }, process.env.AUTH_SECRET, { expiresIn: process.env.AUTH_EXPIRE });

        // Devuelve el token en la respuesta
        res.status(201).json({ token });
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

