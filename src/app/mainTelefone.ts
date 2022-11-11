import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import AdicaoTelefone from "../processo/telefone/adicaoTelefone";
import EdicaoTelefone from "../processo/telefone/edicaoTelefone";
import RemocaoTelefone from "../processo/telefone/remocaoTelefone";

export default class MainTelefone {
    private empresa: Empresa
    private running: boolean;

    constructor(empresa: Empresa) {
        this.empresa = empresa;
        this.running = true;
    }

    rodar() {
        while (this.running) {
            console.log(`\nOpções:`);
            console.log(`1 - Cadastrar telefone à cliente existente`);
            console.log(`2 - Remover telefone`);
            console.log('3 - Editar telefone');
            console.log('0 - Voltar');

            let entrada = new Entrada();
            let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

            switch (opcao) {
                case 1:
                    new AdicaoTelefone(this.empresa.getClientes).cadastrar();
                    break;
                case 2:
                    new RemocaoTelefone(this.empresa.getClientes).excluir();
                    break;
                case 3:
                    new EdicaoTelefone(this.empresa.getClientes).editar();
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