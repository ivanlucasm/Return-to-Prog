const notas = [10, 9.5, 7, 8, 6]
console.log(notas);

let notasAtualizadas = notas.map((nota) =>{
    
    return nota + 1 >= 10 ? 10 : nota + 1
})

console.log(notasAtualizadas);