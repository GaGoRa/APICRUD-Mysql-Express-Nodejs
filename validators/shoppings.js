const Joi = require('joi');

async function create(req, res,next) {

    const shopping = Joi.object({

        ShoppingName:Joi.string()
        .alphanum()
        .min(3)
        .max(15)
        .required(),

        latLng:Joi.string()
        .alphanum()
        .required(),

        Cuit:Joi.string()
        .required(),
        
        ManagerId:Joi.number()
        .required()
});

    try{
        await shopping.validateAsync(req.body);
        next();
    }catch(err) {
        if(err.details && err.details.length > 0){
        const errors = err.details.map(detailError => detailError.message)
        return res.status(500).send(errors.join(', '));

    }
        console.log(err)
        return res.status(500).send({msg_error:'We have errors when validating data'});
}

}

async function update(req, res,next) {

    const shopping = Joi.object({

        ShoppingName:Joi.string()
        .alphanum()
        .min(3)
        .max(15),

        latLng:Joi.string()
        .alphanum(),
        

        Cuit:Joi.string()
        .greater(6),
        
        ManagerId:Joi.number()
        
        
    
});

    try{
        await shopping.validateAsync(req.body);
        next();
    }catch(err) {
        if(err.details && err.details.length > 0){
        const errors = err.details.map(detailError => detailError.message)
        return res.status(500).send(errors.join(', '));

    }
        return res.status(500).send('We have errors when validating data');
}

}


module.exports = {
    create,
    update
}