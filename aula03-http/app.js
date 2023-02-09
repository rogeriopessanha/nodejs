
var http = require('http')

http.createServer(function (requisisao, resposta) {
    resposta.end('<h1>Bem-vindo ao meu site</h1> <h2>Guia do desenvolvedor</h2> ')
}).listen(8181)

console.log('Meu servidor está rodando')