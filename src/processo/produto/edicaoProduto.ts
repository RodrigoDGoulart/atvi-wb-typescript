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
        console.log('\n Início de edição do cliente');
        let indice = this.entrada.receberNumero('Por favor informe o índice do cliente a ser editado: ');
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente (Antes era ${this.produtos[indice].nome}): `)
        let produto = new Produto(nome);
        this.produtos[indice] = produto;
        console.log('Produto alterado');
    }
}