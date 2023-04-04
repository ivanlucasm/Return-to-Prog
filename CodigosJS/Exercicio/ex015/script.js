function verificar(){
    var data = new Date()
    var ano = data.getFullYear()

    var fAno= document.getElementById('txtAno')
    var res = document.querySelector('div#res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if(fAno.value.length == 0 || Number (fAno.value) > ano){
        alert('[Erro], verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radSex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <10){
                img.setAttribute('src','fotos/criancamasc.jpg')
            }else if(idade < 21){
                img.setAttribute('src','fotos/jovemmasc.jpg')
            }else if(idade <50){
                img.setAttribute('src','fotos/adultomasc.jpg')
            }else{
                img.setAttribute('src','fotos/idosomasc.jpg')   
            }

        }else{
            genero = 'Mulher'
            if(idade >= 0 && idade <10){
                img.setAttribute('src','fotos/criancafem.webp')
            }else if(idade < 21){
                img.setAttribute('src','fotos/jovemfem.jpg')
            }else if(idade <50){
                img.setAttribute('src','fotos/adultofem.jpg')
            }else{
                img.setAttribute('src','fotos/idosofem.jpg')   
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
       
        
        
    }
}