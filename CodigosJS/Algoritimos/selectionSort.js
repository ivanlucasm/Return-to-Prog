const livros = require("./listaLivros")
const menorValor = require("./menorValor")

for (let atual = 0; atual < livros.length; atual++){
   let menor = menorValor(livros, atual)

   let livroAtual = livros[atual]
   console.log('Posicao atual: ', atual)
   console.log('Livro Atual: ', livros[atual])
   let livroMenorPreco = livros[menor]
   console.log('Livro Menor Preço: ', livros[menor])

   livros[atual] = livroMenorPreco
   livros[menor] = livroAtual
}

console.log(livros)