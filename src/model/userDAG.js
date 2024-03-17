import mongoose from 'mongoose'
//se crea los modelos para mandar la informacion  a mongo mediante plantillas similare
const user = mongoose.Schema(
    {
        user:{
          type: String,
          require:true,
          integer:true
        },
        password:{
            type: String,
            require:true
          },
    },
    {
      timestamps:true
     }
    
)
const usuario=mongoose.model("usuario",user)
export default usuario