module.exports = (sequelize, type) => {
    return sequelize.define('USER',{

        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

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
        email: {
            type: type.STRING,
            allowNull: false,
            unique: true
        },  

    })

}

