

let express = require("express")
let app = express()

app.get("/", (req, res) => {
    res.json({success: true})
})

app.get("/cor/:pessoa", (req, res) => {
    let pessoa = req.params.pessoa

    if (pessoa = "rogerio") {
        res.json({cor: "azul", color: "blue"})
    }
})

module.exports = app

