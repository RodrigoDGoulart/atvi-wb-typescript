import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroProduto from "../processo/produto/cadastroProduto";
import EdicaoProduto from "../processo/produto/edicaoProduto";
import ExclusaoProduto from "../processo/produto/exclusaoProduto";
import ListagemProdutos from "../processo/produto/listagemProduto";

export default class MainProdutos {
    private empresa: Empresa
    private running: boolean;

    constructor(empresa: Empresa) {
        this.empresa = empresa;
        this.running = true;
    }

    rodar() {
        while (this.running) {
            console.log(`\nOpções:`);
            console.log(`1 - Cadastrar produto`);
            console.log(`2 - Listar todos os produtos`);
            console.log('3 - Editar produto');
            console.log('4 - Excluir produto');
            console.log('0 - Voltar');

            let entrada = new Entrada();
            let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

            switch (opcao) {
                case 1:
                    let cadastroProduto = new CadastroProduto(this.empresa.getProdutos)
                    cadastroProduto.cadastrar()
                    break;
                case 2:
                    let listagemProduto = new ListagemProdutos(this.empresa.getProdutos)
                    listagemProduto.listar()
                    break;
                case 3:
                    let edicaoCliente = new EdicaoProduto(this.empresa.getProdutos);
                    edicaoCliente.editar();
                    break;
                case 4:
                    let exclusaoServico = new ExclusaoProduto(this.empresa.getProdutos);
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