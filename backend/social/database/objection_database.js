

const knex = require('knex');
const knexfile = require('./knexfile');
const db=knex(knexfile.development);
//module.exports = db;


const {Model} = require("objection");

function setupDB()
{
    const db1=knex(knexfile.development);
    Model.knex(db1);
}

module.exports = setupDB;