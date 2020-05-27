const express = require('express');
const router = express.Router();
const conexion = require('../connection');



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

//Ruta harcodeada
/*router.get('/',(req,res) =>{
    res.json(destinos);
}); */

//nueva ruta de conexión a la base:
router.get('/',(req,res) =>{
    
    let sql = `SELECT dest_id AS id , dest_nombre AS nombre, dest_imagen AS imagen, dest_precio AS precio
               FROM destinos`;

    conexion.query(sql, function (err,result,fields){
        if(err) throw err;

        res.json(result);
    })

});

//barra de busqueda
router.get('/search/:terminoBuscado',(req,res) =>{
    
    let sqlSearch = `SELECT dest_id AS id , dest_nombre AS nombre, dest_imagen AS imagen, dest_precio AS precio
               FROM destinos
               WHERE dest_nombre LIKE ?`;

    let value = [`%${req.params.terminoBuscado}%`]
    conexion.query(sqlSearch, function (err,result,fields){
        if(err) throw err;

        res.json(result);
    })

});


router.get('/:id',(req,res) =>{
    let destinoId = destinos.filter(
                          function(destino){
                                return destino.id == req.params.id 
                          });
    if (destinoId.length == 1)  {
        destinoId = destinoId[0];
    } 
    res.json(destinoId);
})

module.exports = router;