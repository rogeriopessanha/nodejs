

require('dotenv').config();
const dotenv = require('dotenv')
dotenv.config()

var database = require("./database")



// RAW
database.raw("SELECT * FROM games")
.then(data =>{
    console.log(data)
})
.catch(erro => {
    console.log(erro)
})
