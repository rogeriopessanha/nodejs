
const mongoose = require("mongoose")
const articleModel = require("./article")

mongoose.connect("mongodb://127.0.0.1:27017/aprendendoMongo")

const Article = mongoose.model("Article", articleModel)

// cadastro
const artigo = new Article({
    title: "Curso de Node.js", 
    author: "Rogerio", 
    body: "Aprendendo bastante",
    special: true,
    resume: {
        content: "Muitas aulas",
        author: "Rogerio"
    }
})

artigo.save().then(() => {
    console.log("Artigo Salvo")
}).catch(erro => {
    console.log(erro)
})

//Exibir a listagem
Article.find({}).then(articles => {
    console.log(articles)
}).catch(erro => {
    console.log(erro)
})


// buscando pelo id
Article.find({ '_id': "6438ba951df1ad4c943fa2e7" })
    .then(article => {
        console.log(article)
    }).catch(erro => {
        console.log(erro)
    })


// buscando pelo author e body
Article.find({ "author": "Rogerio", "body": "Aprendendo bastante" })
    .then(article => {
        console.log(article)
    }).catch(erro => {
        console.log(erro)
    })


// buscando pelo content
Article.find({ "resume.content": "video aula"})
    .then(article => {
        console.log(article)
    }).catch(erro => {
        console.log(erro)
    })


// busca especifica(nesse caso pelo autor)
Article.findOne({ "resume.author": "Rogerio"})
.then(article => {
    console.log(article)
}).catch(erro => {
    console.log(erro)
})


// deletando dados
Article.findByIdAndDelete("6438ba951df1ad4c943fa2e7")
.then(() => {
    console.log("Dado removido com sucesso!")
}).catch(erro => {
    console.log(erro)
})


//Atualizando dados
Article.findByIdAndUpdate("6438bc201e75a81c8494a060", {
    title: "Atualização",
    author: " Rogerio Pessanha ",
    body: "Editando",
    resume: {
        content: "Testando atualização",
        author: " Rogerio Pessanha "
    }
}).then(() => {
         console.log("Atualizado com sucesso")
     }).catch(erro => {
         console.log(erro)
     })