const {Model, DataTypes}=require("sequelize");
const sequelize=require("../config/database");

class Usuario extends Model{}

Usuario.init({
    usuarioId:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {isEmail: true}
    },
    senha:{
        type: DataTypes.STRING,
        allowNull: false
    }
},
    {sequelize, modelName: "Usuario", tableName: "usuarios"}
)

module.exports=Usuario;