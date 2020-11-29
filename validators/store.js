const Joi = require('Joi');

async function create(req, res, next) {

    const schema = Joi.object({
        StoreName:Joi.string()
        .min(3)
        .max(30)
        .required(),

        Cuit:Joi.string()
        .min(3)
        .max(15)
        .required(),

        UserManagerId:Joi.string()
        .required(),

        ShoppingId:Joi.string()
        .required()
    });

    try{
        await schema.validateAsync(req.body);
        next()
    }catch(err){
        console.log(err)
        if(err.details && err.details.length > 0){
            
            const errors = err.details.map((detailError) => detailError.message)

            return res.status(401).send({message: errors.join(',')});
    }
    return res.status(500).send('We have errors when validating data');
}
}


async function update(req, res, next) {

    const schema = Joi.object({
        StoreName:Joi.string()
        .min(3)
        .max(30),
        

        Cuit:Joi.string()
        .min(3)
        .max(15),
        
        UserManagerId:Joi.string(),
     

        ShoppingId:Joi.string()
    });

    try{
        await schema.validateAsync(req.body);
        next()
    }catch(err){
        console.log(err)
        if(err.details && err.details.length > 0){
            
            const errors = err.details.map((detailError) => detailError.message)

            return res.status(401).send({message: errors.join(',')});
    }
    return res.status(500).send('We have errors when validating data');
}
}

module.exports  = {
    create,
    update
}