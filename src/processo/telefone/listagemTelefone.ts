import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemTelefone extends Listagem{
    private cliente: Cliente

    constructor(cliente: Cliente){
        super();
        this.cliente = cliente;
    }

    public listar(): void {
        this.cliente.getTelefones.forEach((tel, indice) => {
            console.log(`${indice} - (${tel.getDdd}) ${tel.getNumero}`);
        });
    }

    public validarIndice() {
        let running = true;
        while(running){
            let indice = new Entrada().receberNumero(`\nPor favor, insira um índice de telefone do cliente ${this.cliente.nome}: `);
            let telefone = this.cliente.getTelefones[indice];
            if (telefone) {
                running = false;
                return indice;
            } else {
                console.log('Telefone não encontrado, por favor insira um número de índice válido');
            }
        }
    }
}