import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemClienteIndice extends Listagem {
    private clientes: Array<Cliente>

    constructor(clientes: Array<Cliente>){
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        this.clientes.forEach((cliente, indice) => {
            console.log(`${indice} - ${cliente.nome}`);
        });
    }

    public validar() {
        let running = true;
        while(running){
            let indice = new Entrada().receberNumero('Por favor, insira o índice do cliente escolhido: ');
            let cliente = this.clientes[indice];
            if (cliente) {
                running = false;
                return cliente;
            } else {
                console.log('\nCliente não encontrado. Por favor tente novamente\n');
            }
        }
    }

}