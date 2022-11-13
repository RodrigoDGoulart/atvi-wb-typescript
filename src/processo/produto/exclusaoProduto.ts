import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Exclusao from "../exclusao";
import ListagemProdutoCod from "./listagemProdutoCod";

export default class ExclusaoProduto extends Exclusao {
    private produtos: Array<Produto>
    private entrada: Entrada
    
    constructor(produtos: Array<Produto>){
        super();
        this.produtos = produtos;
        this.entrada = new Entrada();
    }

    public excluir(): void {
        console.log('\n Início de exclusão do produto');

        let listaProduto = new ListagemProdutoCod(this.produtos)
        listaProduto.listar();

        let produto = listaProduto.validar() as Produto;

        let running = true;
        while(running){
            console.log(`Excluir produto ${produto.nome}?\n1 - Sim\n2 - Não`);
            let opcao = this.entrada.receberNumero('Resposta: ');
            switch(opcao){
                case 1:
                    let indice = this.produtos.findIndex(item => item.cod === produto.cod);
                    delete this.produtos[indice];
                    console.log('Exclusão concluída');
                    running = false;
                    break;
                case 2:
                    console.log('Exclusão cancelada');
                    running = false;
                    break;
                default:
                    console.log('Comando não compreendido')
            }
        }
    }
}