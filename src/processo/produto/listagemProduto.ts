import Produto from "../../modelo/produto";
import Listagem from "../listagem";

export default class ListagemProdutos extends Listagem {
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
    }
    public listar(): void {
        console.log(`\nLista de todos os produtos:`);
        console.log(`--------------------------------------`);
        this.produtos.forEach((produto) => {
            console.log(`Nome: ` + produto.nome);
            console.log(`Código: ${produto.cod}`);
            console.log(`Valor: R$${produto.valor}`);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}