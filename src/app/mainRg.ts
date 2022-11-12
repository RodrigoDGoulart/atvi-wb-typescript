import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import AdicaoRG from "../processo/rg/adicaoRG";
import EdicaoRg from "../processo/rg/edicaoRg";
import RemocaoRG from "../processo/rg/remocaoRg";

export default class MainRG {
    private empresa: Empresa
    private running: boolean;

    constructor(empresa: Empresa) {
        this.empresa = empresa;
        this.running = true;
    }

    rodar() {
        while (this.running) {
            console.log(`\nOpções:`);
            console.log(`1 - Cadastrar RG à cliente existente`);
            console.log(`2 - Remover RG`);
            console.log('3 - Editar RG');
            console.log('0 - Voltar');

            let entrada = new Entrada();
            let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

            switch (opcao) {
                case 1:
                    new AdicaoRG(this.empresa.getClientes).cadastrar();
                    break;
                case 2:
                    new RemocaoRG(this.empresa.getClientes).excluir();
                    break;
                case 3:
                    new EdicaoRg(this.empresa.getClientes).editar();
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