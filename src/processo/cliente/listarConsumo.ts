import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListarConsumo extends Listagem {
    private clientes: Array<Cliente>;
    private cliente!: Cliente;
    private entrada: Entrada;
    private invalido!: Boolean

    constructor(clientes: Array<Cliente>){
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public listar(): void {
        do {
            this.invalido = false;
            let indice = this.entrada.receberNumero('Por favor insira o índice do cliente: ');
            this.cliente = this.clientes[indice];
            if (!this.cliente){
                console.log('Cliente não encontrado');
                this.invalido = true;
            }
        } while (this.invalido);
        do {
            this.invalido = false;
            let opcao = this.entrada.receberNumero('Listar consumo de produtos ou de serviços?\n1 - Produtos\n2 - Serviços\n');
            switch(opcao){
                case 1:
                    console.log(`Consumo de produtos do cliente ${this.cliente.nome}`)
                    this.cliente.getProdutosConsumidos.forEach(produto => {
                        console.log(`- ${produto.nome}`);
                    });
                    break;
                case 2:
                    console.log(`Consumo de serviço do cliente ${this.cliente.nome}`)
                    this.cliente.getServicosConsumidos.forEach(servico => {
                        console.log(`- ${servico.nome}`);
                    });
                    break;
                default:
                    console.log('Comando não compreendido')
                    this.invalido = true;
            }
        } while(this.invalido)
    }
}