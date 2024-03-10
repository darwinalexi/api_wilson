import mongoose from 'mongoose'
//se crea los modelos para mandar la informacion  a mongo mediante plantillas similares
export const Cliente = mongoose.Schema(
    {
        Identificacion:{
          type: String,
          require:true,
          integer:true
        },
        Nombre:{
            type: String,
            require:true
          },
          Direccion:{
            type: String,
            require:true
          },
          Telefono:{
            type:String,
            require:true
          },
          Fecha_de_nacimiento:{
            type: Date,
            require:true
          }
    },
        
    {
      timestamps:true
     }
)
const Clientes=mongoose.model("Alquiler",Cliente)
export default Clientes