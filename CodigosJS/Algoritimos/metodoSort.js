const array = [2, 3, 32, 21, 34, 14, 65, 78]

let numero = array.sort(function ordena(a,b){
return a-b;

});

console.log(numero);


function comparaNumeros(a,b) { 
    if (a == b) return 0; 
    if (a < b) return -1; 
    if (a > b) return 1; 
}

console.log(array.sort(comparaNumeros))