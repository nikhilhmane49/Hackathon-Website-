
const jwt = require('jsonwebtoken');

const authadmin = (req, res, next) => { 

    const { atoken } = req.headers;

    try {
        
        if(!atoken){
        return res.status(401).json({
            success:false,
            message:"Token is required"
        })
        }
        
        const decoded = jwt.verify(atoken, process.env.JWT_SECRET);
        
        if(decoded!==process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD){
            return res.status(401).json({
                success:false,
                message:"Invalid token"
            })
        }

        next();

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error:error,
            success: false,
            message: "admin authentication error"
        })
    }
    



}

module.exports = authadmin;