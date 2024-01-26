const express = require('express');
const app = express();
const cors = require('cors');
const date = require('date-and-time');
const db = require('./db')
const {InserirCliente,TodosClientes} = require('./db')

app.use(express.json());
app.use(cors());

const frequesia = []

app.listen(3000, () =>{
    console.log('servidor iniciado')
});


app.get('/clientes', async (req, res) =>{
    console.log('usuarios buscados')
    const clientes = await TodosClientes()
    res.status(200).json({clientes})
})

app.get('/cliente/:id',  (req, res) => {
    const cliente = frequesia.find(x => x.id == req.params.id)
    res.status(200).send(cliente)
})

app.post('/clientes', async (req, res) =>{
    const cliente = req.body;

    function formatarDataParaMySQL(data) {
        const dataFormatada = new Date(data);
        return dataFormatada.toISOString().slice(0, 19).replace('T', ' ');
      }
    cliente.data = formatarDataParaMySQL(new Date);

    await InserirCliente(cliente);

    res.status(200).json({message: "cliente cadastrado com sucesso!", cliente: cliente})
})

app.put('/clientes:id', (req, res) => {
    const cliente = frequesia.find(x => x.id == req.params.id)
    const clienteId = frequesia.indexOf(cliente)
    frequesia[clienteId] = req.body
    res.status(200).send("contado do cliente atualizado com sucesso ")
})
