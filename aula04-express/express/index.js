
const express = require('express'); //importando o express
const app = express();//iniciando o express


//req => dados enviados pelo usuario
//res => resposta que vai ser enviada para o usuario


app.get('/', function (req, res) {
    res.send('<h1>Bem-vindo ao meu site</h1>')
})


app.get('/blog/:artigo?', function (req, res) {

    var artigo = req.params.artigo

    if (artigo) {
        res.send('<h2>Artigo: ' + artigo + ' </h2>')
    }else{

        res.send('<h1>Bem-vindo ao meu portfolio: https://rogeriopessanha.github.io/portifolio/</h1>')
    }
})

app.get('/canal/youtube', function (req, res) {

    var canal = req.query['canal']

    if (canal) {
        res.send(canal)
    }else{
        res.send('Nenhum canal encontrado')
    }
    
    // res.send('<h1>Bem-vindo ao meu canal do youtube</h1>')
})

app.get('/ola/:nome/:empresa', function (req, res) {
    var nome = req.params.nome
    var empresa = req.params.empresa
    res.send('<h1>Olá ' + nome  + ' do ' + empresa + ' </h1>')
})

app.listen(4000, function (erro) {
    if (erro) {
        console.log('Ops, deu algum erro!');
    } else {
        console.log('Servidor iniciado com sucesso!')
    }
})