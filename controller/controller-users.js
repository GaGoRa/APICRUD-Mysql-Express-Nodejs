const { User} = require('../config/db')
const bcrypt = require('bcrypt')


async function getList(req, res) {

    const limit  = req.query.limit ? parseInt(req.query.limit) :5;
    const skip  = req.query.skip ? parseInt(req.query.skip)* limit : 0;

    try {
   
    const listUsers = await User.findAndCountAll({
        limit: limit,
        offset: skip,
    });
    return res.status(200).json({
        page:skip,
        users: listUsers
        }
    
    );

}catch(err){
    console.log(err) 
    return res.status(500).json({message:"Error getting result"});

    }
}

async function create(req, res) {
    
try{
    const passwordEncrypt = bcrypt.hashSync(req.body.Password, 10);

    req.body['Password'] = passwordEncrypt;
    const CreateUser = await User.create( req.body);

    return res.status(200).json({message:  "User " + " " + req.body.FirstName + " " + "created" });

    }catch(err){
        console.log(err);
       return res.status(404).json({msg_error:err.errors[0].message}); 
        
    }
        
};

async function deleter(req, res) {
    
    
    const user = await User.findOne({
        where : {
            id: req.params.userId,
        }
    });
    if(!user){
    return res.status(404).json({errorMessage:"the user not exist"})
    }else{
        try{
        await User.destroy({ where : {id: req.params.userId}});

        return res.status(200).json({ message: 'User was deleted'});
        }catch(err){
        console.log(err);
        return res.status(404).json({msg_error:err.errors[0].message})
    }
}
}
async function get(req, res) {
    
    const user = await User.findAll({where: {id: req.params.userId}})
    return res.status(200).json(user);
    
}

async function update(req, res) {

   
    const user = await User.findOne({
        where : {
            id: req.params.userId,
        }
    });
    console.log(user)
    if(!user){
    return res.status(404).json({errorMessage:"the user not exist"})
    }else{
    
    	try{
        await User.update(req.body ,{where: {id : req.params.userId}});    
        return res.status(200).json({ message :'Update user'});

        }catch(err){
        console.log(err);
        return res.status(404).json({msg_error:err.errors[0].message})
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