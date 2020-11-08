const bcrypt = require('bcrypt')
const { User } = require('../config/db')
const jwt  = require('../config/jwt')

async function login(req , res) {

    try {

    const user = await User.findOne({ where:{ email: req.body.email }})

    if(!user){
        return res.status(404).json({errorMenssage: " User no found"})
    }else{
       
        if(!bcrypt.compareSync(req.body.password,user.Password)){
            return res.status(404).json({errorMenssage: "Mail or password are invalid"});

        }else{
            const token = jwt.sign({
                FirstName : user.FirstName,
                LastName : user.LastName,
                email   : user.email,
            
                });
            return res.status(200).json(token);
        }
    }
    }catch(err){
        return res.status(500).send({message :'Error sesion not found'}); 
    }
}

module.exports = {

    login
}