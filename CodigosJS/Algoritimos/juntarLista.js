const {edGalho, edFolha} = require("./arrays");

function juntaLista(lista1, lista2){
    let listaFinal = [];
    let posicaoAtualList1 = 0;
    let posicaoAtualList2 = 0;
    let atual = 0;

    while(posicaoAtualList1 < lista1.length && posicaoAtualList2 < lista2.length){
        let produtoAtualList1 = lista1[posicaoAtualList1];
        let produtoAtualList2 = lista2[posicaoAtualList2];
        if(produtoAtualList1.preco < produtoAtualList2.preco){
            listaFinal[atual] = produtoAtualList1;
            posicaoAtualList1++;
        }else{
            listaFinal[atual] = produtoAtualList2;
            posicaoAtualList2++;
        }

        atual++;
    }

    while(posicaoAtualList1 < lista1.length){
        listaFinal[atual] = lista1[posicaoAtualList1];
        posicaoAtualList1++;
        atual++;
    }

    while(posicaoAtualList2 < lista2.length){
        listaFinal[atual] = lista2[posicaoAtualList2];
        posicaoAtualList2++;
        atual++;
    }

    return listaFinal;

}

console.log(juntaLista(edFolha, edGalho));