import mongoose from 'mongoose'
//se crea los modelos para mandar la informacion  a mongo mediante plantillas similare
const usuario = mongoose.Schema(
    {
        correo:{
            type: String,
            require:true
          },
          clave:{
            type: String,
            require:true
          },
    },
        
    {
      timestamps:true
     }
)
const usuarios=mongoose.model("registro",usuario)
export default usuarios