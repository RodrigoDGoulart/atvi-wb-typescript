import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../processo/cliente/cadastroCliente";
import EdicaoCliente from "../processo/cliente/edicaoCliente";
import ListagemClientes from "../processo/cliente/listagemClientes";
import CadastroProduto from "../processo/produto/cadastroProduto";

export default class MainClientes {
    private empresa: Empresa
    private running: boolean;

    constructor(empresa: Empresa) {
        this.empresa = empresa;
        this.running = true;
    }

    rodar() {
        while (this.running) {
            console.log(`\nOpções:`);
            console.log(`1 - Cadastrar cliente`);
            console.log(`2 - Listar todos os clientes`);
            console.log('3 - Editar cliente');
            console.log('4 - Excluir cliente');
            console.log('0 - Voltar');

            let entrada = new Entrada();
            let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

            switch (opcao) {
                case 1:
                    let cadastroCliente = new CadastroCliente(this.empresa.getClientes)
                    cadastroCliente.cadastrar()
                    break;
                case 2:
                    let listagemClientes = new ListagemClientes(this.empresa.getClientes)
                    listagemClientes.listar()
                    break;
                case 3:
                    let edicaoCliente = new EdicaoCliente(this.empresa.getClientes);
                    edicaoCliente.editar();
                    break;
                case 4:
                    let cadastroProduto = new CadastroProduto(this.empresa.getProdutos);
                    cadastroProduto.cadastrar()
                    break;
                case 0:
                    this.running = false;
                    break;
                default:
                    console.log(`Operação não entendida :(`);
            }
        }
    }
}