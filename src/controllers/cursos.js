const express = require('express');
const Curso = require('../models/curso_model');
const Joi = require("@hapi/joi");
const ruta = express.Router();



//funcion async tipo get para traer listado de activos
async function listarCursosActivos(){
    let cursos = await Curso.find({"estado" : true});
    return cursos;
}

ruta.get('/',(req,res)=>{
    let resultado = listarCursosActivos();
    resultado.then(cursos => {
        res.json(cursos);
    }).catch(err => {
        res.status(400).json(err);
    })

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

//funcion async Actualizar tipo PUT
async function actualizarCurso (id, body){
    let curso = await Curso.findByIdAndUpdate(id,{
        $set: {
            titulo: body.titulo,
            descripcion: body.descripcion
        }
    },{new: true});
    return curso; 
}

//endpoint tipo PUT para actualizar base datos CURSOS
ruta.put('/:id',(req , res) => {
    let resultado = actualizarCurso(req.params.id, req.body);
    resultado.then(curso => {
        res.json(curso)
    }).catch(err => {
        res.status(400).json(err)
    })
})

//funcion async  para inactivar  cursos
async function desactivarCurso(id){
    let curso = await Curso.findByIdAndUpdate(id, {
        $set: {
            estado: false 
        }
    }, {new: true});
    return curso;
}

//endpoint de tipo DELETE  Para cursos "inactivar estado"
ruta.delete('/:id' , (req, res) => {
    let resultado = desactivarCurso(req.params.id);
    resultado.then(curso => {
        res.json(curso);
    }).catch(err => {
        res.status(400).json(err);
    })
})



module.exports = ruta;