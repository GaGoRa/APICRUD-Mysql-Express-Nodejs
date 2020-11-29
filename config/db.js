require('dotenv').config();
const Sequelize = require('sequelize');

const {modelsShopping,modelsStore,modelsUser} = require('../models/index')

const sequelize = new Sequelize(
        process.env.NAME_DATABASE,
        process.env.USER_DATABASE,
        process.env.PASSWORD_DATABASE,
        {
            host:process.env.HOST_DATABASE,
            port:process.env.PORT_DATABASE,
            dialect:process.env.TYPE_DATABASE
        }

)





const Shopping = modelsShopping(sequelize, Sequelize);
const Store = modelsStore(sequelize, Sequelize);
const User = modelsUser(sequelize, Sequelize);

//associations

Shopping.belongsTo(User,{as:"Manager"});
Store.belongsTo(Shopping,{as:"Shopping"});
Store.belongsTo(User,{as:'UserManager'});


sequelize.sync({force: false})
        .then(() =>{
            console.log('synchronized tables')
        })

    
module.exports = {
    Shopping,
    Store,
    User,
    
    
};