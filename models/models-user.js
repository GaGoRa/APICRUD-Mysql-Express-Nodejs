module.exports = (sequelize, type) => {
    return sequelize.define('USER',{

        

        FirstName:{
            type: type.STRING,
            allowNull: false,
        },
        LastName: {
            type: type.STRING,
            allowNull: false,
        },
        DNI: {
            type: type.STRING,
            allowNull: false,
            unique: true
        },
        Birthdate: {
            type: type.DATE,
            allowNull: false,
        },
        Sex: {
            type: type.STRING,
            allowNull: false,
        },
        Password: {
            type: type.STRING,
            allowNull: false,
        },
        Email: {
            type: type.STRING,
            allowNull: false,
            unique: true
        },  
        Rol: {
            type: type.STRING,
            allowNull: false,
        },  

    })

}

