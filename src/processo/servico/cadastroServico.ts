import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Cadastro from "../cadastro";
import ValidarValor from "./validarValor";

export default class CadastroServico extends Cadastro {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do serviço`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do serviço: `);
        let codigo = this.entrada.receberNumero("Por favor informe o código do serviço: ");
        console.log("Por favor insira o valor do produto");
        let valor = new ValidarValor().validar() as number;
        let servico = new Servico(nome, codigo, valor);
        this.servicos.push(servico);
        console.log(`\nCadastro concluído :)\n`);
    }
}