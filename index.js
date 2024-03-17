import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import { ruta } from './src/router/router.interesesDAG.js';
import { routeArcticleDAG } from './src/router/router.articulosDAG.js';
import { rutaclienteDAG } from './src/router/router.clientesDAG.js';
import { rutaalqulierDAG } from './src/router/router.alquiler.js';
import { rutalogin } from './src/router/authDAG.js';

const server= express()
const port = 3000;
const url = "mongodb+srv://darwinalexisguerrerobaos:oFGmgjpxWHZDecqU@apinode.gghsldz.mongodb.net/"
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended:false}))

server.listen(port, ()=>{
    console.log("todo al pelo")
})

server.use(ruta)
server.use(routeArcticleDAG)
server.use(rutaclienteDAG)
server.use(rutaalqulierDAG)
server.use(rutalogin)


server.use(express.static('./public'))
server.set('view engine', 'ejs');
server.set('views', './view/');
server.get('/document', (req, res) => {
    res.render('document.ejs'); 
});


/*se crea la conexion a la base de datos  en mongo*/
mongoose.connect(url)
.then(()=>{
    console.log("connection to mongo");
})
.catch(error=>{
console.log(error);
})