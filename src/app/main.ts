import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Empresa from "../modelo/empresa"
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import MainClientes from "./mainClientes";
import MainProdutos from "./mainProdutos";
import MainRelatorio from "./mainRelatorio";
import MainServicos from "./mainServicos";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

const bd = require('../../bd.json');
bd.clientes.forEach(cliente => {
    let novoCpf = new CPF(cliente.cpf.valor, cliente.cpf.dataEmissao);
    let novoCliente = new Cliente(cliente.nome, cliente.nomeSocial, novoCpf);
    cliente.produtosConsumidos.forEach(produto => {
        novoCliente.addProdutoConsumido(new Produto(produto.nome, produto.cod))
    })
    cliente.servicosConsumidos.forEach(servico => {
        novoCliente.addServicoConsumido(new Servico(servico.nome, servico.cod))
    });
    empresa.getClientes.push(novoCliente);
});
bd.produtos.forEach(produto => {
    let novoProduto = new Produto(produto.nome, produto.cod);
    empresa.getProdutos.push(novoProduto);
});
bd.servicos.forEach(servico => {
    let novoServico = new Servico(servico.nome, servico.cod);
    empresa.getServicos.push(novoServico);
});

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Seção cliente`);
    console.log('2 - Seção produto');
    console.log('3 - Seção serviço');
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let mainClientes = new MainClientes(empresa);
            mainClientes.rodar();
            break;
        case 2:
            let mainProdutos = new MainProdutos(empresa);
            mainProdutos.rodar();
            break;
        case 3:
            let mainServicos = new MainServicos(empresa);
            mainServicos.rodar();
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}