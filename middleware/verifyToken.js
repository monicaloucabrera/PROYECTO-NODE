const jwt = require("jsonwebtoken");


function verifyToken(req, res, next){  
   return new Promise((resolve,reject)=>{
   const token = req.headers.authorization;
  
  if (!token){
    reject({
        status:401, message:"Token de autorizacion no proporcionado"})
  }
   jwt.verify(
    token.split(" ")[1],
    "71b8b7236a031c1ef2acb749d59fcd295b06b3dc7c2905994c62763b9ed92564",
   (error,decodedToken)=>{
    if (error)
      {
        reject({status:401,message:"Token de autenticacion no valido"});
      }else {
        req.userId = decodedToken.userId //agregamos el id de ausuario decodificado para su posterior uso
        resolve();
      }
});
})
.then(()=>next())//Continua el seguimiento del siguiente meddlewre  o del siguiente controlador
.catch((error)=>
res.status(error.status|| 500).json({message:error.message})
);
}
module.exports = verifyToken;



