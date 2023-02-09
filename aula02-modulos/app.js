
var calculadora = require('./calculadora')

console.log(calculadora.soma(1,9))
console.log(calculadora.sub(5,10))
console.log(calculadora.mult(5,5))
console.log(calculadora.div(50,4))
calculadora.nome = 'Minha nova calculadora'
console.log(calculadora.nome)