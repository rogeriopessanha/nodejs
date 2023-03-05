
function enviarEmail(corpo, para) {
    setTimeout(() => {
        console.log(`
        Para: ${para}
        ----------------------
        ${corpo}
        ----------------------
        De: Rogerio Pessanha
        `)
    },8000)
}

enviarEmail('Ola, seja bem-vindo(a)', 'rogerio@dev.com')