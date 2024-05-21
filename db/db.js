//Importamos Mongoose para crear la conexion a la base dedatos(DB) de Mongodb

const mongoose = require("mongoose");

//Conectamos la base de datos utilizando el metodo connect() de mongoose

//const mongoURL = "mongodb+srv://localhost:27017/proyect"

const mongoDBURL = "mongodb+srv://monicacabrerac:QZQcmqjuoAfGBSpC@monicacabrera.1zlkufy.mongodb.net/proyect"


mongoose.connect(mongoDBURL)
const db = mongoose.connection

//Funcion para conectarse a la BDD

function connectDB(){
    return new Promise((res,rej)=>{
//conectar a al BDD con la URL 
   mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("Conexion a la BD establecida correctamente");
        //Si la conexion es exitosa resolvmos la promesa
        res();
    })
    .catch((err) =>{
        //Si hay un error al conectar, imprimir el error y rechazar la promesa
        console.error("Error al conectar la BD",err);
        rej(err);
    });

    });
}

module.exports = connectDB;