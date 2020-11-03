const e = require('express');
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
        .min(3)
        .max(30),

        DNI: Joi.number()
        .integer()
        .min(1)
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

        email:Joi.string().email()

        
        

    });
    console.log(users);

    try {
        const result = await users.validateAsync(req.body);
        console.log(result);
        next()
    }catch(err){
        console.log(err);
        if(err.details && err.details.length > 0){
            const errors = err.details.map(detailError => detailError.message)
            return res.status(500).send(errors.join(', '));

        }
        console.log(err);
        return res.status(500).send('We have errors when validating data');
    
    }

}

module.exports = {
    create
}


