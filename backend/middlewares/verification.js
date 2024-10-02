const jwt = require('jsonwebtoken');

const verifyToken = async(req, res, next)=>{
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({error: 'Please login to access this endpoint'});
    }

    try{
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decode.userId;
        next();
    }catch(error){
        res.status(401).json({error: 'Something went wrong'});
    }
}

module.exports = verifyToken;