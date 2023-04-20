const cliente = {
    nome: "Ivan",
    idade: 32,
    cpf: "11133322244",
    email:"ivan@email.com"
}


console.log(`Os 3 primeiros digitos do cpf desse cliente é ${cliente.cpf.substring(0,3)}`)

const chaves = ["nome", "idade", "cpf", "email", "altura"]

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`)
})