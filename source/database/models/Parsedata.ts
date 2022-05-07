const Sequelize = require('sequelize');
const db = require('../../config/db');
const table = 'parsedata';

export const Parsedata = db.define(table, {
    id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4
    },
    service_name: {
        type: Sequelize.STRING
    },
    trace: {
        type: Sequelize.STRING
    },
    requested_name: {
        type: Sequelize.STRING
    },
    path_params: {
        type: Sequelize.JSON
    },
    request_body: {
        type: Sequelize.JSON
    },
    request_methods: {
        type: Sequelize.STRING
    },
    request_url: {
        type: Sequelize.STRING
    }
});

Parsedata.sync()
    .then(() => {
        console.log('table is ready');
    })
    .catch((err: any) => console.log(`table crushed here => ${err}`));
