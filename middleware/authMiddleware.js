const jwt = require("jsonwebtoken")

const authMiddleware = (req,res,next)=>{
    try{
        const token =  req.headers.authorization // Get token from Authorization header
    
        if(!token){
            return res.status(401).json({  //401 Unauthorized if no token is provided
                message: "No token provided"
            })
        }

        const verifiedToken = jwt.verify(
            token,
            process.env.JWT_SECRET
        )
        req.user = verifiedToken  // Store decoded token data inside request object
        next()  // middleware must tell Express:"OK finished checking, go to next step of router called next getProfile function" "
    }
    catch(err){
        return next(err)
    }
}

module.exports = authMiddleware;