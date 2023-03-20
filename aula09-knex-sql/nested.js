

require('dotenv').config();
const dotenv = require('dotenv')
dotenv.config()

var database = require("./database")

// NESTED QUERIES
database.insert({nome: "State of Decay", preco: 45}).into("games")
.then(data => {
    database.select(["id", "preco"]).table("games")
.then(data => {
    console.log(data)
})
.catch(erro => {
    console.log(erro)
})
})
.catch(erro => {
    console.log(erro)
})
