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
        this.produtos.forEach((produto, indice) => {
            console.log(`Índice: ${indice}`)
            console.log(`Nome: ` + produto.nome);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}