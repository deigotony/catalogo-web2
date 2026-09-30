const { Sequelize } = require("sequelize");
const cls=require('cls-hooked');
const namespace = cls.createNamespace('test-transaction');

Sequelize.useCLS(namespace);

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./database/biblioteca.sqlite",
    logging: false
});
module.exports = sequelize;