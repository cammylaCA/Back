'use strict'

const express = require('express');
const api = express.Router();
const tareaCtrl = require('../controllers/tareas');


api.get('/', (req, res) => res.sendFile('/public/index.html', { root: '.' }));


//Routes TAREA....
api.get('/tareas', tareaCtrl.obtenerTarea);
api.post('/nuevaTarea', tareaCtrl.nuevaTarea);
api.put('/modificarTarea', tareaCtrl.modificarTarea);
api.put('/borrarTarea', tareaCtrl.borrarTarea);


//Export obligatorio..
module.exports = api;




