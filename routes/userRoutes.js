//importamos express  y creamos un router

const express = require("express")

const router = express.Router()

//Importamos el controlador de usuarios

const userController= require("../controllers/userController")

//Definir las rutas para el CRUD de usuarios

router.get("/",userController.getAllusers)//Ruta para obtener todos los usuarios
router.post("/",userController.createUser)//Ruta para crear un usuario
router.put("/:id",userController.updateUser)//Ruta para modificar un usuario
router.delete("/:id",userController.deleteUser)//Ruta para eliminar un usario

//Exportamos el modulo para ser utilizado en otras partes

module.exports = router;