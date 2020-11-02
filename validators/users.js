const Joi = require('joi');


 async function create(req, res, next) {
    
    const users = Joi.object( {
        FirstName: Joi.string()
        .alphanum()
        .min(3)
        .max(15)
        .required(),

        LastName: Joi.string()
        .alphanum()
        .min(30)
        .max(30),

        DNI: Joi.number()
        .integer()
        .min(7)
        .max(11)
        .required(),

        Birthdate: Joi.date()
        .required(),
        
        Sex: Joi.string()
        .min(3)
        .max(5)
        .required(),

        Password:Joi.string()
        .alphanum()
        .min(4)
        .max(10)
        .required(),

        Email:Joi.string()
        .email({minDomainSegments: 2,tlds:{allow:['com','net'] } })

    });
    console.log(users);

    try {
        const result = await users.validateAsync(req.body);
        console.log(result);
        next()
    }catch(err){
        console.log(err);
        return res.status(500).send(err);

    }

}

module.exports = {
    create
}


