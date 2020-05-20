const express = require('express');
const    cors = require('cors');

const app = express();

app.use(cors({
              credentials:true,
              origin: 'http://localhost:3000',
              allowedHeaders: ['Content-Type']
}

))

const destinos = [
    {
        id:1,
        nombre:"Ezeiza",
        imagen:"https://www.buenosaires.gob.ar/sites/gcaba/files/styles/interna_pagina/public/_mg_0477.jpg",
        precio:"$100"
    },
    {
        id:2,
        nombre:"Adrogue",
        imagen:"https://i0.wp.com/laurbedigital.com.ar/noticias/wp-content/uploads/2017/12/20171221-brown1.jpg",
        precio:"$120"
    },
    {
        id:3,
        nombre:"Lanus",
        imagen:"https://i0.wp.com/laurbedigital.com.ar/noticias/wp-content/uploads/2017/12/20171221-brown1.jpg",
        precio:"$130"
    },
    {
        id:4,
        nombre:"Grand Bour",
        imagen:"https://i0.wp.com/laurbedigital.com.ar/noticias/wp-content/uploads/2017/12/20171221-brown1.jpg",
        precio:"$140"
    },
    {
        id:5,
        nombre:"Pilar",
        imagen:"https://i0.wp.com/laurbedigital.com.ar/noticias/wp-content/uploads/2017/12/20171221-brown1.jpg",
        precio:"$150"
    },
    {
        id:6,
        nombre:"Adrogue SUR",
        imagen:"https://i0.wp.com/laurbedigital.com.ar/noticias/wp-content/uploads/2017/12/20171221-brown1.jpg",
        precio:"$160"
    }
]

app.get('/destinos',(req,res) =>{
    res.json(destinos);
});

app.get('/destinos/:id',(req,res) =>{
    let destinoId = destinos.filter(
                          function(destino){
                                return destino.id == req.params.id 
                          });
    if (destinoId.length == 1)  {
        destinoId = destinoId[0];
    } 
    res.json(destinoId);
})

app.listen(8888, ()=>{console.log("Backend escuchando")})