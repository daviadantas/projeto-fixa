const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const frequesia = []

app.listen(3000, () =>{
    console.log('servidor iniciado')
});


app.get('/clientes', (req, res) =>{
    console.log('usuarios buscados')
    res.status(200).send(frequesia)
})

app.get('/clientes:id', (req, res) => {
    const cliente = frequesia.find(x => x.id == req.params.id)
    res.status(200).send(cliente)
})

app.post('/clientes', (req, res) =>{
    const cliente = req.body;
    cliente.dataCadastro = new Date().toISOString();
    frequesia.push(req.body)
    res.status(200).json({message: "cliente cadastrado com sucesso!", cliente: cliente})
})

app.put('/clientes:id', (req, res) => {
    const cliente = frequesia.find(x => x.id == req.params.id)
    const clienteId = frequesia.indexOf(cliente)
    frequesia[clienteId] = req.body
    res.status(200).send("contado do cliente atualizado com sucesso ")
})
