
var calculadora = require('./calculadora')

console.log(calculadora.soma(2,8))
console.log(calculadora.sub(5,10))
console.log(calculadora.mult(5,5))
console.log(calculadora.div(50,4))
calculadora.nome = 'Minha nova calculadora'
console.log(calculadora.nome)