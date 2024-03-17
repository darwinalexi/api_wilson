import Jwt from "jsonwebtoken";
import usuario from "../model/userDAG.js";
import moment from 'moment';

export const registro_de_user = async (req, res) => {
    try {
        const crear_usuario = await usuario.create(req.body);
        const {user, password}=req.body
        const datos={user:password}
        res.status(201).json({
            "mensaje": "se creó",
        });
    } catch (error) {
        res.status(500).json({
            "mensaje":error
        })
    }
}

export const login = async (req, res, next) => {
try {
    const { user, password } = req.body;

    const founduser= await usuario.findOne({user})
    if (founduser && founduser.password==password) {
        const datos= {user:password}
        const token = generatetoken(datos);
        res.status(201).json({
            "mensaje":token
        })    
    }else{
        res.status(404).json({
            "mensa":"credenciales incorrectas"
        })
    }

} catch (error) {
    res.status(500).json({
        "mensa":error
    })
}
};

// Genera token
function generatetoken(datos) {
    return Jwt.sign(datos,'clavesupersecreta', { expiresIn: '23h' });
}


export const validarToken = async (req, res, next) => {
    try {
        // Asegúrate de buscar el token en el encabezado 'Authorization'
        const authHeader = req.headers['token'];

        if (typeof authHeader !== 'undefined') {
            const baretoken = authHeader.replace("Bearer ", "");
            req.token = baretoken;

            // Verifica el token
            try {
                // se debe usar la misma clave secreta que usaste para firmar el token
                const payload = Jwt.verify(baretoken, 'clavesupersecreta');
                // Si el token es válido, el payload se asignará a req.user o a cualquier otra propiedad que desees
                req.user = payload.sub; // Asumiendo que el payload tiene una propiedad 'sub' que representa al usuario
                next(); // Llama a next() para pasar al siguiente middleware o controlador
            } catch (error) {
                // Si el token es inválido o ha expirado, envía un mensaje de error
                res.status(401).json({ message: "Token inválido o ha expirado" });
            }
        } else {
            res.status(401).json({ message: "Token no proporcionado" });
        }
    } catch (error) {
        res.status(500).json({
             message: "Error interno del servidor" 
            
            });
    }
};

