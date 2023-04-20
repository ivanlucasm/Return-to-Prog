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

cliente.enderecos.push({
    rua: "Muito muito distante",
    numero: 404,
    apartamento: false
})

const listaDeAP = cliente.enderecos.filter(
    (endereco) => {
        return endereco.apartamento === true;
    }
);

console.log(listaDeAP)