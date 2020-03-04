'use strict';
const db = require('../connection');


const obtenerTarea = (req, res) => {

    let sql = "select * from tarea";
    db.any(sql)
        .then(data => {
            console.log('DATA:', data); // print data;
            return res.status(200).json({
                ok: true,
                data
            });
        })
        .catch(error => {
            console.log('ERROR:', error); // print the error;
            return res.status(400).json({
                ok: false,
                error
            });
        });
};


const nuevaTarea = (req, res) => {
    let body = req.body;

    const {nombre_tarea, descripcion_tarea, condicion, responsable_tarea, critico,fecha_inicio, fecha_termino} = body;


    db.query('INSERT INTO tarea (nombre_tarea, descripcion_tarea, condicion, responsable_tarea, critico, fecha_inicio, fecha_termino) VALUES (${nombre_tarea}, ${descripcion_tarea},${condicion},${responsable_tarea},${critico},${fecha_inicio},${fecha_termino}) RETURNING *', {
        nombre_tarea,
        descripcion_tarea,
        fecha_inicio,
        fecha_termino,
        condicion,
        responsable_tarea,
        critico
    }).then(data => {
        console.log('data: ', data);
        return res.status(200).json({
            ok: true,
            data
        });
    }).catch(error => {
        console.log('ERROR:', error); // print the error;
        return res.status(400).json({
            ok: false,
            error
        });
    });
};


const modificarTarea = (req, res) => {

    let body = req.body;

    const {id,nombre_tarea, descripcion_tarea, fecha_inicio, fecha_termino} = body;


    db.query('UPDATE tarea SET nombre_tarea = ${nombre_tarea},descripcion_tarea = ${descripcion_tarea},fecha_inicio = ${fecha_inicio},fecha_termino = ${fecha_termino} WHERE id = ${id} RETURNING id', {
        id,  nombre_tarea, descripcion_tarea, fecha_inicio, fecha_termino
    }).then(data => {
        console.log('data: ', data);
        return res.status(200).json({
            ok: true,
            data
        });
    }).catch(error => {
        console.log('ERROR:', error); // print the error;
        return res.status(400).json({
            ok: false,
            error
        });
    });
};


const borrarTarea = (req, res) => {

    let body = req.body;

    const {id} = body;

    db.query('DELETE FROM tarea WHERE id = ${id} RETURNING *', {
        id
    }).then(data =>{
        console.log('data: ', data );
        return res.status(200).json({
            ok: true,
            data
        });
    }).catch(error => {
        console.log('ERROR:', error); // print the error;
        return res.status(400).json({
            ok: false,
            error
        });
    });
}




module.exports = {
    nuevaTarea,
    obtenerTarea,
    modificarTarea,
    borrarTarea
};
