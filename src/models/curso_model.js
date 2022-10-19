const mongoose = require('mongoose');

const cursoShema = new mongosee.cursoShema({
    titulo: {
        type:String,
        required: true
    },
    descipcion:{
        type:String,
        required:false
    },
    estado:{
        type:Boolean,
        required:true
    },
    imagen:{
        type:String,
        required:false
    },
    alumnos:{
        type:Number,
        required:0
    },
    calificacion:{
        type:Number,
        required:0
    },
});

module.exports = mongoose.model('Curso' , cursoShema);