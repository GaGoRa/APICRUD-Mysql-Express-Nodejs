module.exports = (sequelize, type) => {
    return sequelize.define('SHOPPING',{

        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        ShoppingName:{
            type: type.STRING,
            allowNull: false,
        },
        Manager: {
            type: type.STRING,
            allowNull: false,
        },
        latLng: {
            type: type.STRING,
            
        },
        Cuit: {
            type: type.STRING,
            allowNull: false,
            unique: true,
        },

    })

}

