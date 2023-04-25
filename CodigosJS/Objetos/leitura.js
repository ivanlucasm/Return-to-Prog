const dados = require("./iniciandoJson.json");
console.log(typeof(dados))
console.log(dados)

const clienteEmString = JSON.stringify(dados)
console.log(clienteEmString)
console.log(typeof clienteEmString)

const objetoCliente = JSON.parse(clienteEmString)
console.log(objetoCliente)