import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroServico from "../processo/servico/cadastroServico";
import EdicaoServico from "../processo/servico/edicaoServico";
import ExclusaoServico from "../processo/servico/exclusaoServico";
import ListagemServicos from "../processo/servico/listagemServico";

export default class MainServicos {
    private empresa: Empresa
    private running: boolean;

    constructor(empresa: Empresa) {
        this.empresa = empresa;
        this.running = true;
    }

    rodar() {
        while (this.running) {
            console.log(`\nOpções:`);
            console.log(`1 - Cadastrar servico`);
            console.log(`2 - Listar todos os servicos`);
            console.log('3 - Editar servico');
            console.log('4 - Excluir servico');
            console.log('0 - Voltar');

            let entrada = new Entrada();
            let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

            switch (opcao) {
                case 1:
                    let cadastroServico = new CadastroServico(this.empresa.getServicos)
                    cadastroServico.cadastrar()
                    break;
                case 2:
                    let listagemServico = new ListagemServicos(this.empresa.getServicos)
                    listagemServico.listar()
                    break;
                case 3:
                    let edicaoCliente = new EdicaoServico(this.empresa.getServicos);
                    edicaoCliente.editar();
                    break;
                case 4:
                    let exclusaoServico = new ExclusaoServico(this.empresa.getServicos);
                    exclusaoServico.excluir()
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