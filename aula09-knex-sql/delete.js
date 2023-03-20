

require('dotenv').config();
const dotenv = require('dotenv')
dotenv.config()

var database = require("./database")

//DELETE
database.where({ id: 1 }).delete().table("games")
.then(data => {
    console.log(data)
})
.catch(erro => {
    console.log(erro)
})