const jwt = require('jsonwebtoken');

const sign = (user) => {

    try{
      return  jwt.sign({user} ,process.env.SECRET_KEY,{expiresIn:'120ms'})

    }catch(err){
        throw new Error('This is a new error customs')

    };
}

const verify = (token) =>{

    try{
    const decode = jwt.verify(token,process.env.SECRET_KEY)
    return 
    
    }catch(err){

        throw new Error('This is a new error custom in verify')
    }

}

module.exports ={

    sign,
    verify
}