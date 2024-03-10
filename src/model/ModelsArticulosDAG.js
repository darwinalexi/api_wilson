import mongoose from 'mongoose'

export const ArticulosDAG = mongoose.Schema(
    {
        idarticulo:{
          type: Number,
          required:true,
          integer:true
        },
        nombre:{
            type: String,
            required:true
          },
          tipo:{
            type: String,
            required:true
          }
    },
        
    {
      timestamps:true
     }
)
export const articulo=mongoose.model("Alquiler", ArticulosDAG)
