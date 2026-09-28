const Usuario=require("./Usuario");
const Item=require("./Item");
const Categoria=require("./Categoria");

// Usuario e Item (1:N)
Usuario.hasMany(Item, {foreignKey: "usuarioId"});
Item.belongsTo(Usuario, {foreignKey: "usuarioId"});

// Categoria e Item (1:N)
Categoria.hasMany(Item, {foreignKey: "categoriaId"});
Item.belongsTo(Categoria, {foreignKey: "categoriaId"});

module.exports = {Usuario, Item, Categoria};