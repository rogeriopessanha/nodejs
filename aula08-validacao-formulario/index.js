var express = require("express");
var app = express();
var session = require('express-session');
var flash = require('express-flash');
var cookieParser = require("cookie-parser")

app.set("view engine", "ejs");

//body parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cookieParser("qualquerCoisa"))

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.use(flash());

app.get("/", (req, res) => {

    var nomeError = req.flash("nomeError");
    var emailError = req.flash("emailError");
    var pontosError = req.flash("pontosError");
    var nome = req.flash("nome")
    var email = req.flash("email")
    var pontos = req.flash("pontos")

    nomeError = (nomeError == undefined || nomeError.length == 0) ? undefined : nomeError;
    nome = (nome == undefined || nome.length == 0) ? "" : nome;

    emailError = (emailError == undefined || emailError.length == 0) ? undefined : emailError;
    email = (email == undefined || email.length == 0) ? "" : email;

    pontosError = (pontosError == undefined || pontosError.length == 0) ? undefined : pontosError;
    pontos = (pontos == undefined || pontos.length == 0) ? "" : pontos;



    res.render("index", {nomeError, emailError, pontosError, nome: nome, email: email, pontos: pontos});
})

app.post("/form",(req, res) => {
    var{nome, email, pontos} = req.body;

    var nomeError;
    var emailError;
    var pontosError;

    if (nome == undefined || nome == "" ) {
        nomeError = "O nome não pode ser vazio";
    }

    if (nome.length < 4) {
        nomeError = "O nome está muito curto";
    }

    if (email == undefined || email == "") {
        emailError = "O e-mail não pode ser vazio";
    }

    if (pontos == undefined || pontos < 20) {
        pontosError = "Você não pode ter menos de 20 pontos";
    }

    if (nomeError != undefined || emailError != undefined || pontosError != undefined) {
        req.flash("nomeError", nomeError);
        req.flash("emailError", emailError);
        req.flash("pontosError", pontosError);

        req.flash("nome", nome)
        req.flash("email", email)
        req.flash("pontos", pontos)

        res.redirect("/");
    }else{
        res.send("Formulario está correto");
    }

})

app.listen(3000,(req, res) => {
    console.log('SERVIDOR RODANDO');
})