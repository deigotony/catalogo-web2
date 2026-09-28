const {Model, DataTypes}=require("sequelize");
const sequelize=require("../config/database");

class Item extends Model{}

Item.init({
    itemId:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    usuarioId:{
        type: DataTypes.INTEGER,
        references: {
            model: "usuarios",
            key: "usuarioId"
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        allowNull: false
    },
    categoriaId:{
        type: DataTypes.INTEGER,
        references:{
            model: "categorias",
            key: "categoriaId"
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        allowNull: true // item sem categoria
    },
    nome:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    descricao:{
        type: DataTypes.TEXT,
        allowNull: true
    },
    urlImagem:{
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
    data:{
        type: DataTypes.DATE,
        allowNull: false
    }
},
    {sequelize, modelName: "Item", tableName: "itens"}
);

module.exports=Item;