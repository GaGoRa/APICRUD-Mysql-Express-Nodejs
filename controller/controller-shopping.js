
const {Shopping} = require('../config/db')


async function getList(req, res) {

    const limit = req.query.limit ? parseInt(req.query.limit) : 5;
    const skip = req.query.skip? parseInt(req.query.skip)* limit : 0;

    try{
        const shoppings = await Shopping.findAndCountAll({
            limit:limit, 
            offset:skip,
    });
    return res.status(200).send({shoppings})
}catch(err){
    console.log(err)
    return res.status(404).send({err_msg:'error getting result'})   
}


}

async function create(req, res) {

    try {

        await Shopping.create(req.body);


    res.status(200).send( {message: 'Crearte shopping'})

    }catch(err){
       // console.log(err)
        return res.status(404).send({msg_error:err.errors[0].message})
    }

    
    
}

async function deleter(req, res) {

    
    const shopping = await Shopping.findOne({
        where:{
            id: req.params.id,
        }

    });
    if(!shopping){
        return res.status(401).send({err_msg:'the Shopping not exist' });
    }else{
        console.log(shopping)
        try{
            await Shopping.destroy({where:{
                id: req.params.id,
            }})
            return res.status(200).send({message :'Shopping deleted'})
        }catch(err){
            console.log(err)
            return res.status(401).send({msg_err:'Shopping was not delete'})
        }
    }

}

async function get(req, res) {
    try{
        const shopping = await Shopping.findOne({
            where:{
                id: req.params.id
                }
        });

    return res.status(200).send({shopping})
}catch(err){
    console.log(err)
    return res.status(404).send({err_msg:'error getting result'})   
}
   
}

async function update(req, res) {
    
    const shoppings = await Shopping.findOne({where:{
        id: req.params.id,
    }});

    if(!shoppings){
        return res.status(401).send({message:'Shopping not exist'});
    }else{
        try{

            await Shopping.update(req.body ,{where:{id: req.params.id}});
            return res.status(401).send({message:'Shopping was updated'})

        }catch(err){
            console.log(err)
            return res.status(401).send({message:'Update not found'})
        }

    }
    
}

module.exports = {
    get,
    create,
    deleter,
    getList,
    update

}