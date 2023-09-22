const express = require('express')
const path = require('path')

const app = express()

// GET => envia informações do back-end para o front-end
// POST => recebe informações do front-end no back-end 

const caminho = path.join(__dirname, 'templates')

app.get('/', (requisicao, resposta) => {
    resposta.sendFile(`${caminho}/index.html`)
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})