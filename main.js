let frequesia = []
let continuar = true

class Clientes{
    nome 
    cpf
    divida = []
    numero
    constructor(nome,cpf,divida,numero){
        this.nome = nome
        this.cpf = cpf
        this.divida = divida
        this.numero = numero
    }
}

function CadastroCliente () {
  let nome = prompt('digite o nome do cliente')
  let cpf = (Number(prompt('digite o cpf do cliente')))
  let divida = Number(prompt('Divida do cliente'))
  let numero = prompt('digite o numero do cliente')

  let  cliente = new Clientes(nome,cpf,divida,numero)
  frequesia.push(cliente)
}

function AumentoDivida (){
    let nomeCliente = prompt('digite o nome do cliente que vc quer buscar: ')
    let buscar = frequesia.find((x) => x.nome === nomeCliente)

    if(nomeCliente == buscar.nome){
       let aumento = Number(prompt('digite a divida: '))
       let total = (aumento + buscar.divida)
        buscar.divida = total
    }
    else {
        console.log('esse usuario não existe')
    }
}

function AcertarConta (){
    let nomeCliente = prompt('digite o nome do cliente que vc quer buscar: ')
    let buscar = frequesia.find((x) => x.nome === nomeCliente)

    if(nomeCliente == buscar.nome){
        alert('esse é o valor total da divida ', buscar.divida)
        let subtraindo = Number(prompt(' digite quanto da divida sera descontado: '))
        let total = (somar - subtraindo)
        console.log(total,' ficou esse total')
        buscar.divida = total
    }
    else {
        console.log('esse usuario não existe')
    }
}

function MostrarTotal (){
    let nomeCliente = prompt('digite o nome do cliente que vc quer buscar: ')
    let buscar = frequesia.find((cliente) => cliente.nome === nomeCliente)

        console.log(nomeCliente, buscar);

    if(nomeCliente == buscar.nome){
        for(i = 0; buscar.divida >= i; i++){
            somar = i
        }
        console.log('esse é o valor total da divida ', somar)
    }
    else {
        console.log('esse usuario não existe')
    }
    
}

while(continuar){

    let opcao = parseInt(prompt('digite 1 para cadastrar o cliente/ digite 2 para colocar colocar a divida/ digite 3 para subtrair algo da conta/ digite 4 para ver o total de uma divida/ digite 5 para encerrar o programa'))
    switch(opcao){
        case 1:
            CadastroCliente();   
            break;
        case 2:
            AumentoDivida();
            break;
        case 3:
            AcertarConta();
            break;
        case 4:
            MostrarTotal();
            break;
        case 5:
            continuar = false
            break;
        default:
            alert('opção invalida')
            break;
}
}
