import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Empresa from "../../modelo/empresa";
import Cadastro from "../cadastro";


export default class CadastroConsumo extends Cadastro {

    private empresa: Empresa;
    private entrada: Entrada;
    private cliente!: Cliente;

    constructor(empresa: Empresa) {
        super();
        this.entrada = new Entrada();
        this.empresa = empresa;
    }

    public cadastrar(): void {
        console.log('Ínicio de cadastro de consumo')
        do {
            let indice = this.entrada.receberNumero('Selecione o cliente através do índice, por favor: ');
            this.cliente = this.empresa.getClientes[indice];
            if (!this.cliente) {
                console.log('Índice de cliente inválido')
            }
        } while (!this.cliente)
        let selecionar: number;
        do {
            selecionar = this.entrada.receberNumero('Adicionar produto ou serviço?\n 1 - Produto\n 2 - Serviço\n');
            let repetir = false
            switch (selecionar) {
                case 1:
                    do {
                        let indice = this.entrada.receberNumero('Insira o índice do Produto: ');
                        let produto = this.empresa.getProdutos[indice];
                        if (indice) {
                            console.log('Índice de produto inválido');
                            repetir = true;
                        } else {
                            this.cliente.addProdutoConsumido(produto);
                        }
                    } while (repetir);
                    break;
                case 2:
                    do {
                        let indice = this.entrada.receberNumero('Insira o índice do Serviço: ');
                        let servico = this.empresa.getProdutos[indice];
                        if (indice) {
                            console.log('Índice de serviço inválido');
                            repetir = true;
                        } else {
                            this.cliente.addServicoConsumido(servico);
                        }
                    } while (repetir);
                    break;
                default:
                    console.log('Comando não compreendido')
            }
        } while (selecionar < 1 || selecionar > 2)
        console.log('Cadastro de consumo finalizado')
    }
}
