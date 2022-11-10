import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import Relatorio1 from "../processo/relatorio/relatorio-1";
import Relatorio2 from "../processo/relatorio/relatorio-2";
import CadastroServico from "../processo/servico/cadastroServico";
import EdicaoServico from "../processo/servico/edicaoServico";
import ExclusaoServico from "../processo/servico/exclusaoServico";
import ListagemServicos from "../processo/servico/listagemServico";

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
            console.log(`1 - 10 clientes que MAIS consumiram produtos ou serviços em quantidade`);
            console.log(`2 - Listagem de clientes por gênero (Feminino - Masculino - Outro)`);
            console.log('3 - Serviços ou produtos mais consumidos');
            console.log('4 - 10 clientes que MENOS consumiram produtos ou serviços em QUANTIDADE');
            console.log('5 - 5 clientes que MAIS consumiram em VALOR')
            console.log('0 - Voltar');

            let entrada = new Entrada();
            let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

            switch (opcao) {
                case 1:
                    new Relatorio1(this.empresa).listar();
                    break;
                case 2:
                    new Relatorio2(this.empresa).listar();
                    break;
                case 3:
                    // codigo
                    break;
                case 4:
                    // codigo
                    break;
                case 5:
                    // codigo
                    break;
                case 0:
                    console.log('\n');
                    this.running = false;
                    break;
                default:
                    console.log(`Operação não entendida :(`);
            }
        }
    }
}