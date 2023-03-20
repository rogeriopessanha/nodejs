//variaveis de ambiente
require('dotenv').config();
const dotenv = require('dotenv')
dotenv.config()

var database = require("./database")

//INSERT
var dados = [
    {
        nome: "Cod",
        preco: 70.10
    },
    {
        nome: "Mario",
        preco: 49.99
    },
    {
        nome: "Forza",
        preco: 60.25
    },
    {
        nome: "Pokemon",
        preco: 50.98
    },

]

database.insert(dados).into("games")
.then(data => {
    console.log(data)
})
.catch(erro => {
    console.log(erro)
})

var query = database.insert(dados).into("games")
console.log(query.toQuery())








