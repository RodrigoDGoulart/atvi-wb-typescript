import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../processo/cliente/cadastroCliente";
import CadastroConsumo from "../processo/cliente/cadastroConsumo";
import EdicaoCliente from "../processo/cliente/edicaoCliente";
import ExclusaoCliente from "../processo/cliente/exclusaoCliente";
import ListagemClientes from "../processo/cliente/listagemClientes";
import ListarConsumo from "../processo/cliente/listarConsumo";

export default class MainRelatorio {
    private empresa: Empresa
    private running: boolean;

    constructor(empresa: Empresa) {
        this.empresa = empresa;
        this.running = true;
    }

    rodar() {
        while (this.running) {
            console.log(`\nOpções:`);
            console.log('1 - 10 Clientes que mais consumiram serviços/produtos em QUANTIDADE');
            console.log('2 - 5 Clientes que mais consumiram serviços/produtos em VALOR');
            console.log('3 - 10 Clientes que menos consumiram serviços/produtos em QUANTIDADE');
            console.log('3 - Ranking produtos mais consumidos');
            console.log('4 - Ranking serviços mais consumidos');
            console.log('5 - Ranking produtos mais consumidos por gênero');
            console.log('6 - Ranking serviços mais consumidos por gênero');
            console.log('0 - Voltar');

            let entrada = new Entrada();
            let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

            switch (opcao) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 0:
                    this.running = false;
                    break;
                default:
                    console.log(`Operação não entendida :(`);
            }
        }
    }
}