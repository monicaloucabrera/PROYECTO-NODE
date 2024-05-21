const user = require("../models/user")

//Controlador para obtener informacion delusuario que ha iniciao sesion

function getCurrentUser(req,res){
    new Promise((resolve,reject)=>{
       //el middleware de Auth(verifyToken)ya almaceno el id del usuarioen req.userId
      const userId = req.userId;
      
      //Busca el id del usuario en la base de datos utiliando el ID de usuario
      User.findById(userId)
      .then(user=>{
        //Verificamos si se encontro el usuario
        if (!user){
            reject({status:404,message:"Usuario no encontrado"})
        }else{
            resolve(user)
        }
      })
      .catch(error=>reject({status:500, message:"Error al obtener el información del usuario"}))

    })
    .then(user=>res.json(user))
    .catch(error=>{
        console.error(error)
        res.status(error.status||500).json({message:error.message});
    })
}

module.exports={
    getCurrentUser,
}