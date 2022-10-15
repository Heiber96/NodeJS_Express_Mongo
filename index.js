const usuarios = require('./controllers/usuarios');
const cursos = require ('./controllers/cursos');



const express = require('express');
const mongoose = require('mongoose');
const { use } = require('./controllers/cursos');

//conexion a mongodb
mongoose.connect('mongodb://localhost:27017/userscoursesdb',{useNewUrlParser: true , useUnifiedTopology: true})
.then(() => console.log('conectado a MongoDB...'))
.catch(err => console.log('No se pudo conectar con mongoDB..', err));


//middleware
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}));

//end points (recursos)
app.use('/api/usuarios',usuarios);
app.use('/api/cursos',cursos); 




const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log('Api REST Ok, Y ejecutandose...');
})

