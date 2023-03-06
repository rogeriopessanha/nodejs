
function enviarEmail(corpo, para, callback) {
    setTimeout(() => {
        console.log(`
        Para: ${para}
        ----------------------
        ${corpo}
        ----------------------
        De: Rogerio Pessanha
        `)
        callback('ok', 10, '5s')
    },3000)
}

console.log('Inicio do envio do e-mail...')
enviarEmail('Ola, seja bem-vindo(a)', 'rogerio@dev.com', (status, amount, time) => {
    console.log(`
    Status: ${status}
    ----------------------
    Contatos: ${amount}
    ----------------------
    Tempo de envio: ${time}
    `)
    console.log('TUDO OK.')
})