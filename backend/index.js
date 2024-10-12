const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

const port = process.env.PORT;

app.use(cors()); //habilita cors para permitir solicitudes
app.use(express.json()); // middleware para parsear 

//conexion a mongodb
mongoose.connect('mongodb+srv://admin:uY59opsnQWVUj0nt@recipehub.3pbwj.mongodb.net/?retryWrites=true&w=majority&appName=RecipeHuB',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>console.log('conectado a mongo'))
.catch((error)=> console.log('error al conectar ',error));

//escuchando el puerto
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
  });