module.exports = (sequelize, type) => {
    return sequelize.define('SHOPPING',{

        

        ShoppingName:{
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

