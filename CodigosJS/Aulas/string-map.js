const nomes = ["Ivan", "Lucas", "Medeiros", "Souza"]

nomeMaisculo = nomes.map((nome) =>{
    return nome.toLocaleUpperCase()
})

nomeMinusculo = nomes.map((nome) =>{
    return nome.toLocaleLowerCase()
})

console.log(nomeMinusculo)
console.log(nomeMaisculo)