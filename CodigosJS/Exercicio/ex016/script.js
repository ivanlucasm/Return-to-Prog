function contar(){

    var inicio = document.getElementById('inicio')
    var fim = document.querySelector('input#fim')
    var passo = document.getElementById('passo')
    var res = document.querySelector('div#res')
    var contador 

    if(inicio.value.length == 0 || fim.value.length ==0 || passo.value.length == 0){
        window.alert('[Erro] Faltam dados!')
        res.innerHTML = `Impossível contar ...`
    }else{
        res.innerHTML = `Contando: <br>`

        if(passo.value <=0){
            window.alert('Passo inválido! Considerando passo 1')
            passo.value = 1
        }

        if(fim.value > inicio.value){
            for (contador = Number(inicio.value); contador <= Number(fim.value) ; contador+=Number(passo.value)){
                res.innerHTML += ` ${contador} \u{1F449} ` 
            }
        }else{
            for (contador = Number(inicio.value); contador >= Number(fim.value) ; contador-=Number(passo.value)){
                res.innerHTML += ` ${contador} \u{1F449} ` 
            }
        }
        res.innerHTML += ` \u{1F3c1} `
    }
}