//variaveis de ambiente
require('dotenv').config();
const dotenv = require('dotenv')
dotenv.config()

var database = require("./database")


// ORDERBY
database.select().table("games").orderBy("nome", "asc")
.then(data => {
    console.log(data)
})
.catch(erro => {
    console.log(erro)
})
