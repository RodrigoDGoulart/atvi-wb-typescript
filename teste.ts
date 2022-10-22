const file = require('./teste.json');

const clientes = file.clientes;
clientes.forEach((nome, indice) => {
    console.log(nome.nome)
    console.log(nome.cpf.valor)
})