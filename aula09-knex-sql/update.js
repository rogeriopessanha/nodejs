

require('dotenv').config();
const dotenv = require('dotenv')
dotenv.config()

var database = require("./database")


// UPDATE
database.where({ id: 2 }).update({preco: 20}).table("games")
.then(data => {
    console.log(data)
})
.catch(erro => {
    console.log(erro)
})
