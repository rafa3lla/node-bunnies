// módulos internos, core modules e módulos externos

const express = require("express")
const path = require("path")


const app = express()

const caminho = path.join(__dirname, 'templates')

app.get('/usuarios/:id', (requisicao, resposta) => {
    const id = 1
    
    resposta.sendFile(`${caminho}/usuarios.html`)
})

app.get('/', (requisicao, resposta) => {
    resposta.sendFile(`${caminho}/index.html`)
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000.")
})


// localhost:3000