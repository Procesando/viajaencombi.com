process.env.BABEL_ENV = 'http://localhost:8888/'; //constantes globales para acceder desde cualquier lugar del backend.
process.env.IMAGES_URL =process.env.BABEL_ENV+'images/'; //constantes globales para acceder desde cualquier lugar del backend.


const express = require('express');
const    cors = require('cors');
const bodyParser = require('body-parser');  //permite tomar los datos del body de un formulario

const destinosRoutes = require('./routes/destinos_routes');
const sessionRoutes = require('./routes/session_routes');
const misDestinosRoutes = require('./routes/misdestinos_routes');

const app = express();

app.use(bodyParser.urlencoded({extended:false})) //configuración del body-parser
app.use(bodyParser.json());

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const auth = require('./auth'); //middelwhere de autorización.

app.use(express.static('../public'));


app.use(cors({
              credentials:true,
              origin: 'http://localhost:3000',
              allowedHeaders: ['Content-Type']
}

))


app.use(session({
    store : new FileStore,
    secret: '123456',
    resave: false,
    saveUninitialized:true,
    name: 'viajaencombi'
}))


app.use('/auth', sessionRoutes);
app.use('/destinos', destinosRoutes);
app.use('/favoritos', misDestinosRoutes);


app.listen(8888, ()=>{console.log("Backend escuchando")})