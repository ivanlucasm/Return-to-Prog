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

for(let chave in cliente){
let tipo = typeof cliente[chave]

if(tipo !== 'object' && tipo !== 'function'){
    console.log(`${chave} : ${cliente[chave]}`)
}

    
}