process.env.BABEL_ENV = 'http://localhost:8888/'; //constantes globales para acceder desde cualquier lugar del backend.
process.env.IMAGES_URL =process.env.BABEL_ENV+'images/'; //constantes globales para acceder desde cualquier lugar del backend.


const express = require('express');
const    cors = require('cors');

const destinosRoutes = require('./routes/destinos_routes');

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


app.use('/destinos', destinosRoutes);


app.listen(8888, ()=>{console.log("Backend escuchando")})