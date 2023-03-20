

require('dotenv').config();
const dotenv = require('dotenv')
dotenv.config()

var database = require("./database")

//SELECT
database.select(["id", "preco"]).table("games")
.then(data => {
    console.log(data)
})
.catch(erro => {
    console.log(erro)
})
