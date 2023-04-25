const cliente = {
    nome: "João",
    idade: 24, 
    email: "joao@firma.com.br",
    telefone: ["11555550", "123123213"]
}

cliente.enderecos = [{
    rua: "Plinio Salgado",
    numero: 20, 
    apartamento: true,
    complemento: "Villa Nova"
}]


function ligaParaCli(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`)
    console.log(`Ligando para ${telefoneResidencial}`)
}

ligaParaCli(... cliente.telefone)

const encomenda = {
    destinatario: cliente.nome,
    ... cliente.enderecos
}

console.log(encomenda)