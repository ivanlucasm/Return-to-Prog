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

const chavesDoObj = Object.keys(cliente)

console.log(chavesDoObj)

if(!chavesDoObj.includes("enderecos")){
    console.error("É necessario ter um endereco cadastrado")
}