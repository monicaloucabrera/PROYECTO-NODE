//importamos express y la conexion de la bd

const express = require("express")
const connectDb = require("./db/db")

//Importamos las rutas

const userRoutes = require("./routes/userRoutes")
const authRoutes = require("./routes/authRoutes")
const sessionRoutes = require("./routes/sessionRoutes") 

//Creamos una instancia de express con el puerto

const app = express()
const PORT = 3010

//const userRoutes = require("./routers/userRoutes")

//Midleware

app.use(express.json())//Invocamos al midleware para que parsee los datos del body de las solicitudes en formato JSON

//Rutas de autenticacion

app.use("/api/auth",authRoutes)

//Rutas de usuarios

app.use("/api/users",userRoutes)//Creamos las rutas de usuario en api/users

//Rutas de usuario actual

app.use("/api/session",sessionRoutes)


//Iniciamos la base de datos
connectDb()

//Inicializams el servidor y lo ponemos en escuchaen el puerto que pusimos arriba

app.listen(PORT,()=>{
    console.log("Servidor corriendo en el puerto: " + PORT)
})

module.exports = app;

