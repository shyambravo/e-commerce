const Sequelize = require('sequelize');

const sequelize = new Sequelize('db', 'root', 'db', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;