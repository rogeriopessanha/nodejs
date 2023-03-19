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
    console.log("FUNCIONANDO...")
    res.send('RODANDO...')
})



app.listen(3000,(req, res) => {
    console.log('SERVIDOR RODANDO');
})