import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import CadastroCliente from "../processo/cliente/cadastroCliente";
import CadastroProduto from "../processo/produto/cadastroProduto";
import CadastroServico from "../processo/servico/cadastroServico";
import ListagemClientes from "../processo/cliente/listagemClientes";
import ListagemProdutos from "../processo/produto/listagemProduto";
import ListagemServicos from "../processo/servico/listagemServico";
import EdicaoCliente from "../processo/cliente/edicaoCliente";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log('3 - Editar cliente');
    console.log('4 - Cadastro de produtos');
    console.log('5 - Listagem de produtos');
    console.log('6 - Cadastro de serviços');
    console.log('7 - Listagem de serviços');
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastroCliente = new CadastroCliente(empresa.getClientes)
            cadastroCliente.cadastrar()
            break;
        case 2:
            let listagemClientes = new ListagemClientes(empresa.getClientes)
            listagemClientes.listar()
            break;
        case 3:
            let edicaoCliente = new EdicaoCliente(empresa.getClientes);
            edicaoCliente.editar();
            break;
        case 4:
            let cadastroProduto = new CadastroProduto(empresa.getProdutos);
            cadastroProduto.cadastrar()
            break;
        case 5:
            let listagemProdutos = new ListagemProdutos(empresa.getProdutos);
            listagemProdutos.listar()
            break;
        case 6:
            let cadastroServico = new CadastroServico(empresa.getProdutos);
            cadastroServico.cadastrar()
            break;
        case 7:
            let listagemServicos = new ListagemServicos(empresa.getProdutos);
            listagemServicos.listar()
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}