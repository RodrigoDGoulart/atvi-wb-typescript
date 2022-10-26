import { type } from "os";
import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Empresa from "../../modelo/empresa";
import Produto from "../../modelo/produto";
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
        console.log(`Cliente ${this.cliente.nome} selecionado.`)
        let selecionar: number;
        let lista = undefined;
        let item = undefined;
        let string = undefined;
        do {
            selecionar = this.entrada.receberNumero('Adicionar produto ou serviço?\n 1 - Produto\n 2 - Serviço \n');
            switch (selecionar) {
                case 1:
                    lista = this.empresa.getProdutos
                    string = 'Produto'
                    break;
                case 2:
                    lista = this.empresa.getServicos
                    string = 'Serviço'
                    break;
                default:
                    console.log('Comando não compreendido')
            }
        } while (selecionar < 1 || selecionar > 2);
        do {
            let codigo = this.entrada.receberNumero(`Insira o código do ${string}: `)
            item = lista.find(x => x.cod == codigo);
            if (item == undefined){
                console.log(`${string} não encontrado.`)
            }
        } while (item == undefined)
        console.log(`${item.nome} selecionado.`)
        let confirmacao = this.entrada.receberNumero(`Cadastrar consumo de ${item.nome} do cliente ${this.cliente.nome}?
        1 - Sim
        2 - Não
        Resposta: `)
        do {
            switch(confirmacao){
                case 1:
                    if (string == 'Produto'){
                        this.cliente.addProdutoConsumido(item);
                        console.log('Produto adicionado.');
                    } else {
                        this.cliente.addServicoConsumido(item);
                        console.log('Serviço adicionado.');
                    }
                    break;
                case 2:
                    console.log('Adição cancelada.');
                    break;
                default:
                    console.log('Comando não compreendido.');
            }
        } while (confirmacao < 1 || confirmacao > 2);
        let maisUm = 0;
        do {
            maisUm = this.entrada.receberNumero(`Adicionar novo produto ou serviço?\n1 - Sim\n2 - Não\nResposta: `);
            switch(maisUm){
                case 1:
                    let novoConsumo = new CadastroConsumo(this.empresa);
                    novoConsumo.cadastrar();
                    break;
                case 2:
                    console.log('Cadastro de consumo finalizado')
                    break;
                default:
                    console.log('Comando não compreendido');
            }
        } while (maisUm < 1 || maisUm > 2);
    }
}
