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
        console.log(`\nLista de consumo do cliente ${this.cliente.nome}:\nProdutos --------------------------------------------`);
        this.cliente.getProdutosConsumidos.forEach(p => {
            console.log(`> ${p.nome} - cod.: ${p.cod} - valor: ${p.valor}`);
        });
        console.log('Serviços --------------------------------------------');
        this.cliente.getServicosConsumidos.forEach(s => {
            console.log(`> ${s.nome} - cod.: ${s.cod} - valor: ${s.valor}`);
        });
        console.log('-----------------------------------------------------')
    }
}