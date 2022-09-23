import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import Exclusao from "../exclusao";

export default class ExclusaoCliente extends Exclusao {
    private clientes: Array<Cliente>
    private entrada: Entrada
    
    constructor(clientes: Array<Cliente>){
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public excluir(): void {
        console.log('\n Início de exclusão do cliente');
        let indice = this.entrada.receberNumero('Por favor informe o índice do cliente a ser editado: ');
        let confirmacao = this.entrada.receberNumero(`Tem certeza em excluir o cliente ${this.clientes[indice].nome} do CPF ${this.clientes[indice].getCpf}?
        1 - Sim
        2 - Não 
        Resposta: `);
        do {
            switch(confirmacao){
                case 1:
                    delete this.clientes[indice];
                    console.log('Cliente excluído.');
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