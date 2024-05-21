const express = require("express")

const router= express.Router()

//Importamosel controlador de sessionroutes 

const sessionController = require("../controllers/sessionController")
const verifyToken= (require)("../middleware/verifyToken")

//Ruta protegida para obtener la infirmacion del usuario que inicio sesion

router.get("/currentUser", verifyToken,sessionController.getCurrentUser);//ruta proteginda del ususrio que esta conectado actualmente

module.exports=router;


