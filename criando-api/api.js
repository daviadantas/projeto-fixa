const express = require('express');
const app = express();
const cors = require('cors');
const {InserirCliente,TodosClientes,AtualizaCliente,AtualizaDivida} = require('./db')

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

app.put('/clientes/:id', async (req, res) => {
    console.log(req.body)
    const id = req.params.id

   function formatarDataParaMySQL(data) {
        const dataFormatada = new Date(data);
        return dataFormatada.toISOString().slice(0, 19).replace('T', ' ');
    }
    cliente.data = formatarDataParaMySQL(new Date);

    await AtualizaCliente(id, req.body)
    res.status(200).send("contado do cliente atualizado com sucesso ")
})

app.put('/clientes/divida/:id', async (req, res) => {
    const id = req.params.id

    function formatarDataParaMySQL(data) {
        const dataFormatada = new Date(data);
        return dataFormatada.toISOString().slice(0, 19).replace('T', ' ');
    }
    cliente.data = formatarDataParaMySQL(new Date);

    await AtualizaDivida(id, req.body)
    res.status(200).send("contado do cliente atualizado com sucesso ")
})
