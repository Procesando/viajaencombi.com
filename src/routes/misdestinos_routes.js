const express = require('express');
const router  = express.Router();
const conexion = require('../connection');

router.get('./:user' , (req,res)=>{
    let sql =  `SELECT destinos.dest_id AS id , dest_nombre AS nombre, dest_imagen AS imagen, dest_precio AS precio 
                FROM destinos , misdestinos
                WHERE misdestinos.user_id = ?
                    AND destinos.dest_id = misdestinos.user_id`;

    let values =  [req.params.user];

    conexion.query(sql , values , (err, result , fields) =>{
        if (err) throw err;

        res.json(result);
    })
})

router.post('/', (req,res)=>{
    let sqlInsert = `INSERT INTO misdestinos
                        VALUES (?,?)`;
    let values = [req.body.usrId , req.body.pubId];

    conexion.query(sqlInsert ,values ,  (err , response , fields)=>{
        if (err){
            res.json(
                {
                    status : 'error',
                    message : 'Error al agregar a favoritos'
                }
            )
        }else {
            res.json(
                {
                    status :'ok',
                    message : 'Agregado a favoritos'
                }
            )
        }
    })
})


module.exports = router;