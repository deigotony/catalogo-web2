const {Model, DataTypes}=require("sequelize");
const sequelize=require("../config/database");

class Categoria extends Model{}

Categoria.init({
    categoriaId:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
},
    {sequelize, modelName: "Categoria", tableName: "categorias"}
)

module.exports=Categoria;