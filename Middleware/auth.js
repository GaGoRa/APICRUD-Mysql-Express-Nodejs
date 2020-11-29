const jwt = require('../config/jwt')

function authenticate (req, res, next) {

    if(!req.headers || !req.headers.authorization){
        return res.status(401).send({ code :"no_token",message: "no authorized"})
    }
    
    const token = req.headers.authorization.replace('Bearer ', '');
    

    try{
        const tokenDecodeUser = jwt.verify(token);
        
        req.user = tokenDecodeUser.user
    }catch(e){
        console.log(e)
        return res.status(401).send({err_msg:'User no authorizated'})
    }

    next()
}

module.exports = {authenticate}