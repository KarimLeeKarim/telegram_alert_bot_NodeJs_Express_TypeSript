const Sequelize = require('sequelize');
const db = require('../../config/db');
const table = 'alert';

export const Parsedata = db.define(table, {
    id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4
    },
    name: {
        type: Sequelize.STRING
    },
    reason: {
        type: Sequelize.STRING
    },
    trace: {
        type: Sequelize.STRING
    },
});

Parsedata.sync()
    .then(() => {
        console.log('table is ready');
    })
    .catch((err: any) => console.log(`table crushed here => ${err}`));
