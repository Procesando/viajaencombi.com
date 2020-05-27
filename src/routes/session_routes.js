const express = require('express');
const router = express.Router();


//INICIAR SESION
router.post('/',(req,res)=>{


    if (req.body.user ==='admin' && req.body.password === '123456'){

        req.session.user = 'admin';  // si session.user está creado, quiere decir que está loggeado porque pasó por acá. 

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


//CERRAR SESION
router.delete('/', (req,res)=>{
    req.session.destroy (err => {
        if(err){
            res.json({
                status:'error',
                message:'error al cerrar la sesión'
            })
        }else{
            res.clearCookie('viajaencombi');
            res.json({
                status:'ok',
                message:'sesión cerrada'
            })
        }
    })
})

module.exports = router; 