import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Edicao from "../edicao";
import ValidarValor from "../servico/validarValor";
import ListagemProdutoCod from "./listagemProdutoCod";

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

        let listaProduto = new ListagemProdutoCod(this.produtos)
        listaProduto.listar();

        let antigoProduto = listaProduto.validar() as Produto;
        let nome = this.entrada.receberTexto(`Por favor informe o nome do produto (Antes era ${antigoProduto.nome}): `);
        console.log(`Por favor informe o valor do produto (Antes era R$${antigoProduto.valor}): `);
        let valor = new ValidarValor().validar() as number;
        let novoProduto = new Produto(nome, antigoProduto.cod, valor);
        console.log(`Trocar produto ${antigoProduto.nome} valor R$${antigoProduto.valor} por ${novoProduto.nome} valor R$${novoProduto.valor}?\n1 - Sim\n2 - Não`);
        let resposta = this.entrada.receberNumero('Resposta: ');
        let running = true;
        while(running){
            switch(resposta){
                case 1:
                    let indice = this.produtos.findIndex(produto => antigoProduto.cod == produto.cod);
                    this.produtos[indice] = novoProduto;
                    console.log('Alteração de produto CONCLUÍDA');
                    running = false;
                    break;
                case 2:
                    console.log('Alteração de produto CANCELADA');
                    running = false;
                    break;
                default:
                    console.log('Comando não compreendido');
            }
        }
    }
}