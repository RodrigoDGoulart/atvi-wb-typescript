import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Listagem from "../listagem";

export default class ListagemProdutoCod extends Listagem {
    private produtos: Array<Produto>
    private entrada: Entrada

    constructor(produtos: Array<Produto>){
        super();
        this.produtos = produtos;
        this.entrada = new Entrada();
    }

    public listar(): void {
        console.log('Lista de produtos: ');
        this.produtos.forEach(produto => {
            console.log(`> ${produto.nome} - R$${produto.valor} - cod.:${produto.cod}`);
        });
        console.log('\n');
    }

    public validar() {
        let running = true;
        while(running){
            let cod = this.entrada.receberNumero('Por favor informe o código do produto: ');
            let produto = this.produtos.find(prod => prod.cod === cod);
            if (produto) {
                running = false;
                return produto;
            } else {
                console.log('Produto não encontrado, por favor tente novamente');
            }
        }
    }
}