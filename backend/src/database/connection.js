const knex = require('knex');
const configuration = require('../../knexfile');

//Develop connection
const connection = knex(configuration.development);

module.exports = connection;
