const express = require("express")

const router= express.Router()

//Importamosel controlador de authrouter 

const authController = require("../controllers/authController")

//Importamos el middleware de seguridad

const verifyToken = require("../middleware/verifyToken")

//Rutas para el auth del user

router.post("/login", authController.login);

//ruta para cerrar sesion
router.post("/logout",verifyToken, authController.logout);

module.exports = router;
