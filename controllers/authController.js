const authService = require("../services/authService")
const AuthToken = require("../models/authToken")
const bcryptService= require("../services/bcryptService")

const User = require("../models/user")

// Controlador para manejar la Autenticacion de Usuarios.

function login(req, res) {
    const { email, contraseña } = req.body;
  
    User.findOne({ email })
      .then((user) => {
        if (!user) {
          return res.status(401).json({ message: "Credenciales Invalidas" });
        }
  
        // Comparar la contraseña ingresada por el usuario con la contraseña almacenada en la base de datos
  
        bcryptService
          .comparePassword(contraseña, user.contraseña)
          .then((match) => {
            if (!match) {
              return res.status(401).json({ message: "Credenciales Invalidas" });
            }
  
            // Si las credenciales son validads es decir si la contraseña ingresada por el usuario es la misma que  la contraseña almacenada en la base de datos (Es decir la contraseña con la cual se registro), vamos a crearle el token.
  
            const token = authService.generateToken(user);
  
            // Guardar el token en la base de datos
  
            AuthToken.create({ userId: user._id, token })
              .then(() => {
                res.json({ token });
              })
              .catch((error) => {
                console.error(error);
                res.status(500).json({ message: "Error al iniciar sesion" });
              });
          })
          .catch((error) => {
            console.error(error);
            res.status(500).json({ message: "Error al iniciar sesion" });
          });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ message: "Error al iniciar sesion" });
      });
  }
  
  // Controlador para cerrar la sesion
  
  function logout(req, res) {
    const token = req.headers.authorization.split(" ")[1]
  
    // Buscamos el token en la base de datos y lo eliminamos
    AuthToken.findOneAndDelete({token})
    .then(()=>{
      res.status(200).json({message: "Sesion cerrada exitosamente", error: {token}})
    })
    .catch((error)=>{
      console.error(error)
      res.status(500).json({message: "Error al iniciar sesion"})
    })
  }
  
  


/*//Controlador para manejar la autenticacion de usuarios

function login(req,res){
    const {email,contraseña}= req.body

    User.findOne({email})
    .then(user=>{
        if (!user){
            return res.status(401).json({message:"Credenciales Invalidas"});
        }
            const match = contraseña === user.contraseña;
        if (!match){
            return res.status(401).json({message:"Credenciales invalidas"});
            }
        const token = authService.generateToken(user)
        res.json({token})    
        
    })

    .catch(err=>{
    console.error(error);
    res.status(500),json({message:"Error al iniciar sesión"});
})
}
//Controlador para cerrar la sesion

function logout(){
    localStorage.removeItem("token");
    res.status(200).json({message:"Sesión cerrada exitosamente"})
}

*/
//exportamos
module.exports = {
    login,
    logout
};