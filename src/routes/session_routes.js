const express = require('express');
const router = express.Router();

router.post('/',(req,res)=>{

    console.log(req.body);


    if (req.body.user ==='pepe' && req.body.password === '123456'){
        res.json(
            {
                status : 'ok',
                message: 'sesión iniciada',
                loggedUser: {
                                id    :125,
                                nombre:'Pepe Garcia'
                            }
            }
        )
    }else{
        res.json(
            {
                status: 'error',
                message: 'Usuario y/o contraseña no valido'
            }
        )
    }
})

module.exports = router; 