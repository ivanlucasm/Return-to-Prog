function gerar(){
    var valor = document.getElementById('valor')
    var select = document.getElementById('seltab')
    
    if(valor.value.length == 0){
        alert('Por favor digite um numero: ')
    }else{
        let n = Number(valor.value)
        select.innerHTML = ''
        for(var i=1; i<=10; i++){

            let item = document.createElement('option')
            item.text = ` ${n} x ${i} = ${n*i} `
            item.value = `tab${n}`
            select.appendChild(item)
         }
    }



    
}