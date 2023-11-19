var mysql = require('mysql');

var conexion = mysql.createConnection({

    host: 'database-2.c7hxgbp2wlyb.us-east-1.rds.amazonaws.com',
    database: 'TrulyNolen',
    user: 'admin',
    password: 'admin1234'

});

conexion.connect( function(error){
    if(error){
        throw error;

    }else{
        console.log('CONEXION EXITOSA');
    }

});


// consulta extraer datos
conexion.query('SELECT * FROM Cliente ',function (error,results, fields){
    if(error)
    throw error;

    results.forEach(result => {
        console.log(result);
    });

});

conexion.end();