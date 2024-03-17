import mongoose from 'mongoose'
//se crea los modelos para mandar la informacion  a mongo mediante plantillas similare
const show_for_alquiler_for_year = mongoose.Schema(
    {
        nombre_del_cliente:{
          type: String,
          require:true,
        },
        alquiler:{
            type: Number,
            require:true
          },
          articulo:{
            type: String,
            require:true
          },
          mes:{
            type:Number,
            require:true
          },
          valor:{
            type: Number,
            require:true,
            integer:true
          }
    },
        
    {
      timestamps:true
     }
)
const enpoind11=mongoose.model("enpond11",show_for_alquiler_for_year)
export default enpoind11