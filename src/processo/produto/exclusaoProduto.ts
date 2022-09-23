import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Exclusao from "../exclusao";

export default class ExclusaoCliente extends Exclusao {
    private produtos: Array<Produto>
    private entrada: Entrada
    
    constructor(produtos: Array<Produto>){
        super();
        this.produtos = produtos;
        this.entrada = new Entrada();
    }

    public excluir(): void {
        console.log('\n Início de exclusão do cliente');
        let indice = this.entrada.receberNumero('Por favor informe o índice do produto a ser editado: ');
        let confirmacao = this.entrada.receberNumero(`Tem certeza em excluir o produto ${this.produtos[indice].nome}?
        1 - Sim
        2 - Não 
        Resposta: `);
        do {
            switch(confirmacao){
                case 1:
                    delete this.produtos[indice];
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