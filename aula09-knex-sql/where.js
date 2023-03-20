

require('dotenv').config();
const dotenv = require('dotenv')
dotenv.config()

var database = require("./database")


// WHERE
database.select()
    .whereRaw("nome =  'State of Decay' OR preco > 150")
    .table("games")
    .then(data => {
        console.log(data)
    })
    .catch(erro => {
        console.log(erro)
    })
