const sequelize = require('sequelize');
const sequelize = require('sequelize');
require('dotenv').config();

const sequelize = process.env.JAWSDB_URL
? new Sequelize(process.env.JAWSDB_URL)
: new Sequelize(process.env.DB_NAME, process.env.DB_PASSWORD, {
    host: 'localhhost',
    dialect: 'mysql',
    dialectOption: {
        decimalNumbers: true,
    },
});

module.exports = sequelize;