
const { User} = require('../config/db')

async function getList(req, res) {
    const listUsers = await User.findAll()
    return res.status(200).json(listUsers);
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