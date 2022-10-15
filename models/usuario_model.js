const mongoose = require('mongoose');
const { boolean } = require('webidl-conversions');

const usuariosSchema = new mongoose.Schema({
    email:{
        type:String,
        required: true  
    },
    nombre: {
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true  
    },
    estado:{
        type:boolean,
        default: true  
    },
    imagen:{
        type:String,
        required: true  
    }
});

module.exports = mongoose.model('Usuario',usuariosSchema);