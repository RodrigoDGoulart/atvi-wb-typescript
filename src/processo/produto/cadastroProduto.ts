import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Cadastro from "../cadastro";
import ValidarValor from "../servico/validarValor";

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do produto`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `);
        let codigo = this.entrada.receberNumero("Por favor insira o código do produto: ");
        console.log("Por favor insira o valor do produto");
        let valor = new ValidarValor().validar() as number;
        let produto = new Produto(nome, codigo, valor);
        this.produtos.push(produto);
        console.log(`\nCadastro concluído :)\n`);
    }
}