const express = require('express')
const routes = express.Router()

let db =[
    {"1": {nome: "Cliente 1", Idade: "20"}},
    {"2": {nome: "Cliente 2", Idade: "20"}},
    {"3": {nome: "Cliente 3", Idade: "20"}}
]

//Buscar Dados
routes.get("/", (req, res) => {
    return res.json(db)
})

// inserir Dados
routes.post("/add", (req, res)=>{
    const body = req.body

    if(!body)
        return res.status(400).end()

    db.push(body)
        return res.json(body)

})


// Deletar dados
routes.delete("/:id", (req, res)=>{
    const id = req.params.id

    let newDB = db.filter(item => {
        if(!item[id])
            return item
    })

    db = newDB
    return res.send(newDB)

})

routes.get("/Teste", (req, res) => {

let Nova = []

const DadosServico = { 
    Servico: [{
        Titulo: "Novo", 
        Status: "Ativo", 
        DescricaoWS: "LoginAD",
        Criterios: "RE",
        Resposta: "110677",
        Id: "1"
    }] 
  }

Nova.push(
    {Servico:[{
        Titulo: "Novo", 
        Status: "Ativo", 
        DescricaoWS: "LoginAD",
        Criterios: "RE",
        Resposta: "110677",
        Id: "1"
    }]}
)

const [Teste] = Nova

console.log(Teste)
console.log(DadosServico)

})

module.exports = routes