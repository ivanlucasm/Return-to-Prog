const login = (pessoa) => {
    let array = []

    for(i=0; i<90000; i++){
        array.push(i)
    }

    return `${pessoa} logou com sucesso!`
}

console.log(login(''))