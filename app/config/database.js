const { Sequelize } = require('sequelize');
const development = require('./config');

const sequelize = new Sequelize(development);

const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
    }

module.exports = {connect};