const mysql = require ('mysql');

let conexion = mysql.createConnection(
    {
        host:'localhost',
        user : 'root',
        password : 'contrasena',
        database : 'viajaencombi'
    }
)

conexion.connect(
    err => {
        if (err) throw err;
        console.log("Conectado a la Base de Datos")
    }
)

module.exports = conexion;