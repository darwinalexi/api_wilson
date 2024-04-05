import Intereses from "../model/ModelinteresesDAG.js";
import { alquiler } from "../model/ModelsAlquilersDAG.js";
import {  articulo } from "../model/ModelsArticulosDAG.js";
import Clientes from "../model/modelclienteDAG.js";



export const listarInteresesPagados = async (req, res) => {
  try {
    const { Identificacion, Nombre,_id } = req.body;
    const cliente = await Clientes.findOne({ Identificacion, Nombre });

    if (!cliente) {
      return res.status(404).json({
        mensaje: "No se encontró el cliente",
      });
    } else {
      const nombreCliente = cliente.Nombre;

      const prestamo = await Intereses.find({ cliente: Identificacion, estado: "no pagado" }).populate({ path: "alquiler", select: "Articulo Mes valor" }).select(" -cliente -Idinteres -fecha");
      
      const nombre_articulo = await articulo.findOne({_id:_id},{nombre:1});
//// toca haccer  la union 
      console.log(nombre_articulo)
   
const respuesta ={
  nombreCliente,
  prestamo,
  nombre_articulo
}
console.log(respuesta)
      return res.status(200).json({
       "consulta":respuesta
      });
    }
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al realizar en la consulta",
      error: error.message,
    });
  }
};


export const listar_mes_interes_por_pagar= async(req, res)=>{
    try {
 
        const { Identificacion, Nombre } = req.body;
        const cliente= await Clientes.findOne({Identificacion,Nombre})
            if (!cliente) {
                return res.status(404).json({
                    "mensaje":"no se encontro el usuario"
                })
            }else{
                const consulta= await Intereses.find({cliente:cliente.Identificacion}).populate({
                   //se coloca el nombre del model 
                    path:"alquiler",
                    //lo que se quiere mostrar
                    select:"Mes Interes_por_pagar"
                    //lo que no se quiere mostrar
                }).select("-estado -fecha -cliente -_id -Idinteres")
                return res.status(200).json({
                    "nombre":cliente.Nombre,
                    "mensaje":consulta
                })
            }
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al realizar en la consulta",
            error: error.message,
          });
    }
}



