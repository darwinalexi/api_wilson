import mongoose from 'mongoose'

 export const AlquilerDAG = mongoose.Schema(
    {
        idialquiler:{
          type: Number,
          required:true
        },
        valor:{
            type: Number,
            required:true
          },
          fecha:{
            type: Date,
            required:true
          },
          Mes:{
            type: Number,
            required:true,
            integer:true
          },
          Descripcion:{
            type: String,
            required:true
          },
          Interes:{
            type: Number,
            required:true
          },
          Cliente:{
            type:Number,
            required:true,
            integer:true
          },
          Articulo:{
            type:Number,
            required:true,
            integer:true
          }
    },
        
    {
      timestamps:true
     }
)
const alquiler=mongoose.model("Alquiler",AlquilerDAG)
export default alquiler