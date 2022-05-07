import config, { dataBaseConfig } from './config';

export const Sequelize = require('sequelize');

module.exports = new Sequelize(dataBaseConfig.database, dataBaseConfig.username, dataBaseConfig.password, {
    host: dataBaseConfig.host,
    dialect: dataBaseConfig.dialect,
    operatorsAliases: 0,
    logging: config.appsettings === 'dev' ? true : false,
    define: {
        timestamps: true,
        underscored: true
    },

    pool: {
        max: 5,
        min: 1,
        acquire: 30000,
        idle: 10000
    }
});
