module.exports = (sequelize, type) => {
    return sequelize.define('STORE',{

        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        StoreName:{
            type: type.STRING,
            allowNull: false,
        },
        Manager: {
            type: type.STRING,
            allowNull: false,
        },
        Cuit: {
            type: type.STRING,
            unique:true
            
        },
        shopping_Id: {
            type: type.STRING,
            allowNull: false,
        },

    })

}
