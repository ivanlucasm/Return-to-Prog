const nomes = ["João", "João", "João", "Maria", "Maria", "Clara", "Ana"]

const meuSet = new Set(nomes);

meuSet.add('Tereza')

const nomesAtualizados = [... meuSet]

console.log(nomesAtualizados)