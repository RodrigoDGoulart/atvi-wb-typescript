import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Edicao from "../edicao";

export default class EdicaoProduto extends Edicao {
    private produtos: Array<Produto>
    private entrada: Entrada
    
    constructor(produtos: Array<Produto>){
        super();
        this.produtos = produtos;
        this.entrada = new Entrada();
    }

    public editar(): void {
        console.log('\n Início de edição do produto');
        let antigoProduto = undefined
        while (antigoProduto == undefined) {
            let codigo = this.entrada.receberNumero('Por favor informe o código do produto a ser editado: ');
            antigoProduto = this.produtos.find(produto => produto.cod == codigo);

            if (antigoProduto != undefined) {
                break;
            }
            console.log('Produto não encontrado');
        }
        let nome = this.entrada.receberTexto(`Por favor informe o nome do produto (Antes era ${antigoProduto.nome}): `);
        let valor = this.entrada.receberNumero(`Por favor informe o valor do produto (Antes era R$${antigoProduto.valor}`)
        let novoProduto = new Produto(nome, antigoProduto.cod, valor);
        let indice = this.produtos.findIndex(produto => antigoProduto.cod == produto.cod);
        this.produtos[indice] = novoProduto;
        console.log('Produto alterado');
    }
}