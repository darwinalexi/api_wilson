import mongoose from 'mongoose'

 const ArticulosDAG = mongoose.Schema(
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
export const articulo=mongoose.model("Articulos", ArticulosDAG)
