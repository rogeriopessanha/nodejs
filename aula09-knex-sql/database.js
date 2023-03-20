

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const port = process.env.PORT;
const client = process.env.CLIENT;
const database = process.env.DB_DATABASE;

const knex = require('knex')({
    client: client,
    connection: {
      host : dbHost,
      port : port,
      user : dbUser,
      password : dbPassword,
      database : database
    }
  });


  module.exports = knex;