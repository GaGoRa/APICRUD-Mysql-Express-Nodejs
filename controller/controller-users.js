
const { options } = require('joi');
const { User} = require('../config/db')

/* 
const getPagination = (page ,size) => {
    const limit = size ? +size : 3;
    const offset =page ? page * limit :0;
    return { limit , offset}
} */


async function getList(req, res) {

    const limit  = req.query.limit ? req.query.limit : 0;
    const skip  = req.query.skip ? req.query.skip : 0;

    try {
    const count = await User.count()
    const listUsers = await User.findAll({
        limit: parseInt(limit),
        offset: parseInt(skip),
    });
    return res.status(200).json({body: {
        count: count,
        users: listUsers
    }
        }
    );
}catch(err){
    console.log(err)
    return res.status(500).json({message:"Error getting result"});

    }
}
async function create(req, res) {
    console.log(req.body)
    try{
    const CreateUser = await User.create(req.body); 
    return res.status(200).json({message:  "User " + " " + req.body.FirstName + " " + "created" })

    }catch(err){
       return res.status(404).json({error:{message: err.message }});  
    }
        
};

async function deleter(req, res) {
    
    await User.destroy({ where : {id: req.params.userId}});
    return res.status(200).json({ message: 'User was deleted'});
    
}

async function get(req, res) {
    console.log(req.params.userId)
    const user = await User.findAll({where: {id: req.params.userId}})
    
    return res.status(200).json(user);
    
}

async function update(req, res) {
    await User.update(req.body ,{where: {id : req.params.userId}});
    
    return res.status(200).send('Update user');
    
}

module.exports = {
    get,
    create,
    deleter,
    getList,
    update

}