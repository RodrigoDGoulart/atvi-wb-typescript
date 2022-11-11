import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import AdicaoTelefone from "../processo/telefone/adicaoTelefone";
import CadastroCliente from "../processo/cliente/cadastroCliente";
import CadastroConsumo from "../processo/cliente/cadastroConsumo";
import EdicaoCliente from "../processo/cliente/edicaoCliente";
import ExclusaoCliente from "../processo/cliente/exclusaoCliente";
import ListagemClientes from "../processo/cliente/listagemClientes";
import ListarConsumo from "../processo/cliente/listarConsumo";
import MainTelefone from "./mainTelefone";
import MainRG from "./mainRg";

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
            console.log('5 - Cadastrar Consumo');
            console.log('6 - Listar consumo de cliente');
            console.log('7 - Seção RG');
            console.log('8 - Seção telefone');
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
                    let excluirCliente = new ExclusaoCliente(this.empresa.getClientes);
                    excluirCliente.excluir();
                    break;
                case 5:
                    let cadastrarConsumo = new CadastroConsumo(this.empresa);
                    cadastrarConsumo.cadastrar();
                    break;
                case 6:
                    let listarConsumo = new ListarConsumo(this.empresa.getClientes);
                    listarConsumo.listar();
                    break;
                case 7:
                    new MainRG(this.empresa).rodar();
                    break;
                case 8:
                    new MainTelefone(this.empresa).rodar();
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