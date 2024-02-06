const conectar = async () =>{
    if(global.conexao && global.conexao.state != 'disconected')
        return global.conexao
    const mysql = require('mysql2/promise')
    const con = mysql.createConnection("mysql://root:senha@localhost:3306/frequesia")
    console.log("conexão bem sucedida")
    global.conexao = con
    return con
}

const TodosClientes = async()=>{
    const con = await conectar()
    const [linhas] = await con.query('SELECT * FROM cliente;')
    return await linhas
}

const InserirCliente = async(cliente)=>{
    const con = await conectar()
    const sql = 'INSERT INTO cliente (cpf,data,divida,nome,numero) VALUES(?,?,?,?,?)'
    const valores = [cliente.cpf,cliente.data,cliente.divida,cliente.nome,cliente.numero]
    await con.query(sql,valores)
    valores.forEach(element => {
        console.log(element)
    });
}

const AtualizaCliente = async(id,cliente)=>{
    const con = await conectar()
    const sql = 'UPDATE cliente SET cpf=?,numero=?,nome=?,data=?,divida=? WHERE id=?'
    const valores = [cliente.cpf,cliente.numero,cliente.nome,cliente.data,cliente.divida,id]
    await con.query(sql,valores)
}

const AtualizaDivida = async(id,cliente)=>{
    const con = await conectar()
    let operacao = cliente.operacao
    console.log(operacao)
    if(operacao == 'dim' ){
       const res = await con.query('SELECT divida FROM cliente WHERE id = ?;', [id])
        let dividaAntiga = res[0][0].divida
        let dividaAntigaNumero = parseFloat(dividaAntiga)
        let dividaNumero = parseFloat(cliente.divida)
        const novaDivida = dividaAntigaNumero - dividaNumero
        console.log(novaDivida)
        const sql = 'UPDATE cliente SET data=?,divida=? WHERE id=?'
        const valores = [cliente.data,novaDivida,id]
        await con.query(sql,valores)

    }else{
        console.log('entrou em aum')
        const res = await con.query('SELECT divida FROM cliente WHERE id = ?;', [id])
        let dividaAntiga = res[0][0].divida
        let dividaAntigaNumero = parseFloat(dividaAntiga)
        let dividaNumero = parseFloat(cliente.divida)
        const novaDivida = dividaAntigaNumero + dividaNumero
        const sql = 'UPDATE cliente SET data=?,divida=? WHERE id=?'
        const valores = [cliente.data,novaDivida,id]
        await con.query(sql,valores)
    }

}

const DeletarCliente = async(id)=>{
    const con = await conectar()
    const sql = 'DELETE FROM cliente WHERE id=?'
    const valores = [id]
    await con.query(sql,valores)
}

module.exports = {TodosClientes, InserirCliente,AtualizaCliente,DeletarCliente,AtualizaDivida}
