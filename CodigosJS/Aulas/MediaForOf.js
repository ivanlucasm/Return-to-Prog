const notas = [10, 9.5, 8, 7.5]

let soma = 0
for(let elemento of notas){
    soma+= elemento
}

let media = soma/notas.length

console.log(media)
