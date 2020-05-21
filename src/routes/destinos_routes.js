const express = require('express');
const router = express.Router();




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

router.get('/',(req,res) =>{
    res.json(destinos);
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