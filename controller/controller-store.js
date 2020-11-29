
const {Store} = require('../config/db')

async function get(req, res) {

    try{
        const store = await Store.findOne({
            where:{
                id:req.params.id
            }
        })
        return res.status(200).send({message:store});
    }catch(err){
        return res.status(401).send({message:'Error getting result'})
    }
}

async function create(req, res) {

    try{
        await Store.create(req.body);
        return res.status(200).send({message:'Crearte store'});

    }catch(err){
        console.log(err)
        return res.status(401).send({msg_error:err.errors[0].message})

    }

    
    
}

async function deleter(req, res) {

    console.log(req.params)
    const store = await Store.findOne({
        where:{
            id: req.params.id,
        }

    });
    if(!store){
        return res.status(401).send({err_msg:'the store not exist' });
    }else{
        try{
            await Store.destroy({where:{
                id: req.params.id,
            }})
            return res.status(200).send({message :'store deleted'})
        }catch(err){
            console.log(err + '23123')
            return res.status(401).send({msg_err:'store was not delete'})
        }
    }
}

async function getList(req, res) {

    const limit = req.query.limit ? parseInt(req.query.limit) : 5;
    const skip = req.query.skip? parseInt(req.query.skip)* limit : 0;

    try{
        const store = await Store.findAndCountAll({
            limit:limit, 
            offset:skip,
    });
    return res.status(200).send({store})
}catch(err){
    
    return res.status(404).send({err_msg:'error getting result'})   
}
   
}

async function update(req, res) {

    const store = await Store.findOne({where:{
        id: req.params.id,
    }});

    if(!store){
        return res.status(401).send({message:'store not exist'});
    }else{
        try{

            await Store.update(req.body ,{where:{id: req.params.id}});
            return res.status(401).send({message:'store was updated'})

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