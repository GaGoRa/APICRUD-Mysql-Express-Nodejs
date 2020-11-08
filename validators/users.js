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

        DNI: Joi.number().integer()
        .greater(6)
        .required(),

            //example : '12-21-2012'
        Birthdate: Joi.date()
        .required(),
        
        Sex: Joi.string()
        .min(3)
        .max(8)
        .valid('FEMALE','female','male','MALE')
        .required(),

        Password:Joi.string()
        .alphanum()
        .min(8)
        .required(),

        Email:Joi.string()
        .email()
        .required(),

        Rol: Joi.string()
        .valid('ADMIN','SHOPPING_MANAGER','COMERCE_MANAGER','USER')
        .required()

    });

    try {
        const result = await users.validateAsync(req.body);
        next()
    }catch(err){
        if(err.details && err.details.length > 0){
            const errors = err.details.map(detailError => detailError.message)
            return res.status(500).send(errors.join(', '));

        }
        console.log(err);
        return res.status(500).send('We have errors when validating data');
    
    }

}

async function update(req, res, next) {


    const users = Joi.object( {
        FirstName: Joi.string()
        .alphanum()
        .min(3)
        .max(15),
        

        LastName: Joi.string()
        .alphanum()
        .min(3)
        .max(30),

        DNI: Joi.number().integer()
        .greater(6),
        
            //example : '12-21-2012'
        Birthdate: Joi.date(),
        
        
        Sex: Joi.string()
        .min(3)
        .max(8)
        .valid('FEMALE','MALE').uppercase(),
    
        Password:Joi.string()
        .alphanum()
        .min(8),
        
        Email:Joi.string()
        .email(),
        

        Rol: Joi.string()
        .valid('ADMIN','SHOPPING_MANAGER','COMERCE_MANAGER','USER').uppercase()
        
    });

    try {
        const result = await users.validateAsync(req.body);
        next()
    }catch(err){
        if(err.details && err.details.length > 0){
            const errors = err.details.map(detailError => detailError.message)
            return res.status(500).send(errors.join(', '));

        }
        console.log(err);
        return res.status(500).send('We have errors when validating data');
    
    }

}



module.exports = {
    create,
    update
}


