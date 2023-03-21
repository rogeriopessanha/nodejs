
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

//INNER JOIN 1 PARA 1
// database.select(["games.id", "estudios.id as estudio_id", "games.nome as game_nome", "estudios.nome as estudio_nome"]).table("games").innerJoin("estudios", "estudios.game_id", "games.id")

//VERSÃO SIMPLIFICADA
// database.select(["games.*", "estudios.nome as estudio_nome"]).table("games").innerJoin("estudios", "estudios.game_id", "games.id")
// .then(data => {
//     console.log(data)
// })
// .catch(erro => {
//     console.log(erro)
// })
//-----------------------------------------------------------------


//INNER JOIN 1 PARA M
// database.select(["games.*", "estudios.nome as estudio_nome"]).table("games").innerJoin("estudios", "estudios.game_id", "games.id").where("games.id",37)
// .then(data => {
//     var estudiosGamesArray = data
//     var game = {
//         id: 0,
//         nome: "",
//         estudios: []
//     }

//     game.id = data[0].id;
//     game.nome = data[0].nome;

//     data.forEach(estudio => {
//         game.estudios.push({nome: estudio.estudio_nome})
//     })

//     console.log(game)
// })
// .catch(erro => {
//     console.log(erro)
// })
//------------------------------------------------------


// INNER JOIN M PARA M
// database.select([
//     "estudios.nome as estudio_nome",
//     "games.nome as game_nome",
//     "games.preco"
// ]).table("games_estudios")
//     .innerJoin("games", "games.id", "games_estudios.game_id")

//     .innerJoin("estudios", "estudios.id", "games_estudios.estudio_id")
//     .where("games.id", 37)
//     .where("estudios.id", 1)
//     .then(data => {
//         console.log(data)
//     })
//     .catch(erro => {
//         console.log(erro)
//     })


async function testeTransacao () {

    try{
        await database.transaction(async trans => {
           await database.insert({nome: "Rockstar Games"}).table("estudios")
           await database.insert({nome: "Undead Labs"}).table("estudios")
           await database.insert({nome: "The Coalition"}).table("estudios")
           await database.insert({nome: "Bethesda"}).table("estudios")
        })

    }catch(erro){
        console.log(erro)
    }
}

testeTransacao();