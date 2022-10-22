import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Exclusao from "../exclusao";

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
        let produto = undefined;
        while (produto == undefined) {
            let cod = this.entrada.receberNumero('Por favor informe o código do produto a ser editado: ');
            produto = this.produtos.find(p => p.cod == cod);
            if (produto != undefined) {
                break;
            }
            console.log('Produto não encontrado');
        }
        let confirmacao = this.entrada.receberNumero(`Tem certeza em excluir o produto ${produto.nome}?
        1 - Sim
        2 - Não 
        Resposta: `);
        do {
            switch(confirmacao){
                case 1:
                    delete this.produtos[this.produtos.indexOf(produto)];
                    console.log('Produto excluído.');
                    break;
                case 2:
                    console.log('Exclusão cancelada.');
                    break;
                default:
                    console.log('Comando não compreendido.');
            }
        } while (confirmacao < 1 || confirmacao > 2);
    }
}