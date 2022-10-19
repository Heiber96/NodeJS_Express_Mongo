const express = require('express');
const Curso = require('../models/curso_model');
const Joi = require("@hapi/joi");
const ruta = express.Router();


ruta.get('/',(req,res)=>{
    res.json('Respuesta a peticion GET de CURSOS funcionando correctamente...');

});

//funcion para "crear" Tipo POST curso
async function crearCurso(body){
    let curso = new Curso({
        titulo : body.titulo,
        descripcion : body.descripcion,
        alumnos : body.alumnos,
        calificacion : body.calificacion
    });
    return await  curso.save();
}

//endpoint tipo POST para crear curso en Base de datos
ruta.post('/' , (req, res) => {
    let resultado = crearCurso(req.body);

    resultado.then(curso => {
        res.json({
            curso
        })
    }).catch(err => {
        res.status(400).json({
            err
        })
    })
});

module.exports = ruta;