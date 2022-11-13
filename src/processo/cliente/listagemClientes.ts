import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        console.log(`--------------------------------------`);
        this.clientes.forEach((cliente, indice) => {
            console.log(`Índice: ${indice}`)
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`Data de Cadastro: ${cliente.getDataCadastro.toLocaleDateString('pt-br')}`)
            console.log('Telefones: ')
            if (cliente.getTelefones.length === 0) {
                console.log('Cliente não possui nenhum telefone cadastrado')
            } else {
                cliente.getTelefones.forEach((tel, indice) => {
                    console.log(`${indice} - (${tel.getDdd}) ${tel.getNumero}`);
                });
            }
            console.log('Rgs: ')
            if (cliente.getRgs.length === 0) {
                console.log('Cliente não possui nenhum RG cadastrado')
            } else {
                cliente.getRgs.forEach((rg, indice) => {
                    console.log(`${indice} - Valor: ${rg.getValor}\nData de emissão: ${rg.getDataEmissao.toLocaleDateString('pt-br')}`);
                });
            }
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}