import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemRg extends Listagem{
    private cliente: Cliente

    constructor(cliente: Cliente){
        super();
        this.cliente = cliente;
    }

    public listar(): void {
        this.cliente.getRgs.forEach((rg, indice) => {
            console.log(`${indice} - RG: ${rg.getValor} Data Emissão: ${rg.getDataEmissao.toLocaleDateString('pt-br')}`);
        });
    }

    public validarIndice() {
        let running = true;
        while(running){
            let indice = new Entrada().receberNumero(`\nPor favor, insira um índice de RG do cliente ${this.cliente.nome}: `);
            let rg = this.cliente.getRgs[indice];
            if (rg) {
                running = false;
                return indice;
            } else {
                console.log('RG não encontrado, por favor insira um número de índice válido');
            }
        }
    }
}