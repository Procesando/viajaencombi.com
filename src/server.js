const express = require('express');
const    cors = require('cors');

const app = express();

app.use(express.static('../public'));


app.use(cors({
              credentials:true,
              origin: 'http://localhost:3000',
              allowedHeaders: ['Content-Type']
}

))

const BASE_URL = 'http://localhost:8888/';
const IMAGES_URL = BASE_URL+'images/';

process.env.BABEL_ENV = 'http://localhost:8888/'; //constantes globales para acceder desde cualquier lugar del backend.
process.env.IMAGES_URL =process.env.BABEL_ENV+'images/'; //constantes globales para acceder desde cualquier lugar del backend.

const destinos = [
    {
        id:1,
        nombre:"Ezeiza",
        imagen:process.env.IMAGES_URL + "ezeiza.jpg",
        precio:"$100"
    },
    {
        id:2,
        nombre:"Adrogue",
        imagen:process.env.IMAGES_URL + "adrogue.jpg",
        precio:"$120"
    },
    {
        id:3,
        nombre:"Lanus",
        imagen:process.env.IMAGES_URL + "lanus.jpg",
        precio:"$130"
    },
    {
        id:4,
        nombre:"Grand Bourg",
        imagen:process.env.IMAGES_URL + "grandBourg.jpeg",
        precio:"$140"
    },
    {
        id:5,
        nombre:"Pilar",
        imagen:process.env.IMAGES_URL + "pilar.jpeg",
        precio:"$150"
    },
    {
        id:6,
        nombre:"Adrogue SUR",
        imagen:process.env.IMAGES_URL + "adrogue.jpg",
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