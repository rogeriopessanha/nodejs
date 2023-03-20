
//variaveis de ambiente
require('dotenv').config();
const dotenv = require('dotenv')
dotenv.config()

var database = require("./database")


//INSERT
// var dados = [
//     {
//         nome: "Cod",
//         preco: 70.10
//     },
//     {
//         nome: "Mario",
//         preco: 49.99
//     },
//     {
//         nome: "Forza",
//         preco: 60.25
//     },
//     {
//         nome: "Pokemon",
//         preco: 50.98
//     },
// ]
// database.insert(dados).into("games")
// .then(data => {
//     console.log(data)
// })
// .catch(erro => {
//     console.log(erro)
// })
//------------------------------------------------

// ASSOCIATED INSERT
// database.insert({
//     nome: "Nintendo",
//     game_id: 35
// }).table("estudios")
// .then(data => {
//     console.log(data)
// })
// .catch(erro => {
//     console.log(erro)
// })
//-------------------------------------------------

// UPDATE
// database.where({ id: 2 }).update({preco: 20}).table("games")
// .then(data => {
//     console.log(data)
// })
// .catch(erro => {
//     console.log(erro)
// })
//----------------------------------------------------

//SELECT
// database.select(["id", "preco"]).table("games")
// .then(data => {
//     console.log(data)
// })
// .catch(erro => {
//     console.log(erro)
// })
//------------------------------------------------------

//DELETE
// database.where({ id: 1 }).delete().table("games")
// .then(data => {
//     console.log(data)
// })
// .catch(erro => {
//     console.log(erro)
// })
//-------------------------------------------------------

// WHERE
// database.select()
//     .whereRaw("nome =  'State of Decay' OR preco > 150")
//     .table("games")
//     .then(data => {
//         console.log(data)
//     })
//     .catch(erro => {
//         console.log(erro)
//     })
//---------------------------------------------------------

// RAW
// database.raw("SELECT * FROM games")
// .then(data =>{
//     console.log(data)
// })
// .catch(erro => {
//     console.log(erro)
// })
//----------------------------------------------------------

// NESTED QUERIES
// database.insert({nome: "State of Decay", preco: 45}).into("games")
// .then(data => {
//     database.select(["id", "preco"]).table("games")
// .then(data => {
//     console.log(data)
// })
// .catch(erro => {
//     console.log(erro)
// })
// })
// .catch(erro => {
//     console.log(erro)
// })
//---------------------------------------------------------------

// ORDERBY
// database.select().table("games").orderBy("nome", "asc")
// .then(data => {
//     console.log(data)
// })
// .catch(erro => {
//     console.log(erro)
// })
//----------------------------------------------------------------

