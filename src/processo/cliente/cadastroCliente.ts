import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import Cadastro from "../cadastro";
import ReceberData from "../rg/receberData";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `);
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `);
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let genero = this.entrada.receberTexto('Por favor informe o gênero do cliente: \nM - Masculino\nF - Feminido\nO - Outro\n')
        console.log(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let dataEmissao = new ReceberData().receber();
        let cpf = new CPF(valor, dataEmissao);
        let cliente = new Cliente(nome, nomeSocial, cpf, genero);
        this.clientes.push(cliente);
        console.log(`\nCadastro concluído :)\n`);
    }
}