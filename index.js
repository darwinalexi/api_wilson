import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import { ruta } from './src/router/router.interesesDAG.js';
import { routeArcticleDAG } from './src/router/router.articulosDAG.js';

const server= express()
const port = 4000;
const url = "mongodb+srv://darwinalexisguerrerobaos:7JN6vVRkSTXsyo3Q@apinode.gghsldz.mongodb.net/?retryWrites=true&w=majority&appName=Apinode" 
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended:false}))

server.listen(port, ()=>{
    console.log("todo al pelo")
})

server.use(ruta)
server.use(routeArcticleDAG)


/*se crea la conexion a la base de datos */
mongoose.connect(url)
.then(()=>{
    console.log("conexion to mongo");
})
.catch(error=>{
console.log(error);
})