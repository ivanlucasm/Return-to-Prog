const cliente = {
    nome: "Ivan",
    idade: 24,
    email: "ivan@email.com",
    telefone: ["993232943", "9874343123"],
    saldo:200,

    efetuaPagamento: function (valor) {
        if(valor> this.saldo){
            console.log('Saldo insuficiente')
        }else{
            this.saldo -= valor;
            console.log(`Pagamento realizado com sucesso!\nSeu novo saldo ${this.saldo}`)
        }
    }
}

cliente.efetuaPagamento(250)
