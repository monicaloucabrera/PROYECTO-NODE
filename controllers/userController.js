
//Importamos el modelo de mongo
const User = require("../models/user");
//Funcion para obtener todos lo susuarios

function getAllusers(req,res){
    //Utilizamos el metodo find() par aobtener todos los usuarios
    User.find()
    .then(users=>res.status(200).json(users))//enviamos todos los usuarios como respuesta
    .catch(err=>{
        console.error(err);
        res.status(500).send("Error al obtener usuarios");
    });
}

//Funcion para crear un nuevo usuario

function createUser(req,res){
    //Extraemos toda la informacion del cuerpo de la solicitud

    const {nombre,edad,email,contraseña}= req.body;
    
    //Creamos un nuevo usuario con create

    User.create({nombre,edad,email,contraseña})
      .then((newUser)=>
      res.status(200).json(newUser)) //Enviamos el nuevo usuario como json
      .catch(err=>{
        console.error(err);
        res.status(500).send("Error al crear el usuario");//en caso de tener un error que envie un mensaje al cliente
    });

    
}
 //Funcion para actualizar un usuario

 function updateUser(req,res){
    //Obtenemos el id del usuario a actualizar
    const userId = req.params.id;
    //obtnemos los satos actualizadosdel body de la req
    const updatedUser = req.body;

    //Utilizamos el metodo findByIdAndUpdate() de mongoose para buscar y actualiar el usuario por ID
    userId.findByIDAndUpdate(userId,updateUser, {new:true})
    .then(user=>res.status(200).json(user))
    .catch((err)=>{
        console.error(err);
        res.status(500).send("Eror al actualizar un usuario");
    });

 }

 //Funcion para eliminar un usario
 
 function deleteUser(req,res){
   
    //obtenemos el id del usuario
   
    const userId = req.params.id;
   
   //Utilizamos el metdodo findIdAndDelete() de mongoose  para buscar y eliminar un usuario

   User.findByAndDelete(userId)
    .then(()=>res.status(204).send("Usuario eliminado correctamente"))//Enviamos una confirmacion al usuario de que se elimino corectamente
    .catch((err)=>{
        console.error(err);
        res.status(500).send("Eror al eliminar el usuario");
    });
 }

 //Exportamos todas la s funciones par asu uso en otras partes

 module.exports={
    createUser,
    deleteUser,
    getAllusers,
    updateUser
 }


 
