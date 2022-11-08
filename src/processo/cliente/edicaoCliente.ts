import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import Edicao from "../edicao";

export default class EdicaoCliente extends Edicao {
    private clientes: Array<Cliente>
    private entrada: Entrada
    
    constructor(clientes: Array<Cliente>){
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public editar(): void {
        console.log('\n Início de edição do cliente');
        let indice = this.entrada.receberNumero('Por favor informe o índice do cliente a ser editado: ');
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente (Antes era ${this.clientes[indice].nome}): `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente (Antes era ${this.clientes[indice].nomeSocial}): `)
        let genero = this.entrada.receberTexto(`Por favor informe o gênero do cliente (Antes era ${this.clientes[indice].getGenero})`)
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf (Antes era ${this.clientes[indice].getCpf.getValor}): `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy (Antes era ${this.clientes[indice].getCpf.getDataEmissao.getDay()}/${this.clientes[indice].getCpf.getDataEmissao.getMonth()}/${this.clientes[indice].getCpf.getDataEmissao.getFullYear()}): `);
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);
        let cliente = new Cliente(nome, nomeSocial, cpf, genero);
        this.clientes[indice] = cliente;
        console.log('Cliente alterado');
    }
}