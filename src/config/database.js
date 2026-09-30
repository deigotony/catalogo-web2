const { Sequelize } = require("sequelize");
const cls=require('cls-hooked');
const namespace = cls.createNamespace('test-transaction');

Sequelize.useCLS(namespace); // sequelize usa namespace para guardar transação ativa; não precisa passar manualmente

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./database/biblioteca.sqlite",
    logging: false
});
module.exports = sequelize;