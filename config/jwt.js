const jwt = require('jsonwebtoken');

const sign = (user) => {

    try{
      return  jwt.sign({user} ,process.env.SECRET_KEY,{expiresIn:'1h'})

    }catch(err){
        throw new Error('This is a new error customs')

    };
}

const verify = (token) =>{

    try{
        return jwt.verify(token,process.env.SECRET_KEY)

    }catch(err){

        throw new Error(err)
        
    }

}

module.exports ={

    sign,
    verify
}