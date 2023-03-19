var express = require("express");
var app = express();
var session = require('express-session');
var flash = require('express-flash');

app.set("view engine", "ejs");

//body parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.use(flash());

app.get("/", (req, res) => {
    res.render("index");
})

app.post("/form",(req, res) => {
    var{nome, email, pontos} = req.body;

    var nomeError;
    var emailError;
    var pontosError;

    if (nome == undefined || "") {
        nomeError = "O nome não pode ser vazio"
    }

    if (email == undefined || email == "") {
        emailError = "O e-mail não pode ser vazio"
    }

    if (pontos == undefined || pontos < 20) {
        nomeError = "Você não pode ter menos de 20 pontos"
    }

    if (emailError != undefined || pontosError != undefined || nomeError != undefined) {
        
    }

    res.send(email)


})

app.listen(3000,(req, res) => {
    console.log('SERVIDOR RODANDO');
})