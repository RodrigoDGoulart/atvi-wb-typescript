import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemRelatorio extends Listagem {
    private clientes: Array<Cliente>;
    private cliente!: Cliente;
    private entrada: Entrada;
    private invalido!: Boolean

    constructor(clientes: Array<Cliente>){
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    private opcoes(): number {
        let invalido = false
        do {
            let txt = 'Qual tipo de relatório deseja?\n1 - 10 Clientes que mais consumiram produtos ou serviços em QUANTIDADE\n'
            let escolha = this.entrada.receberNumero(txt);
            switch (escolha){
                case 1:
                    return 1
                default:
                    console.log('Opção inválida');
                    this.invalido = true
            }
        } while (this.invalido);
    }

    private op1():Cliente[]{
        let ranking = this.clientes.sort((c1, c2) => {
            if (
                Math.max.apply(
                    null,
                    [c1.getProdutosConsumidos.length, c2.getServicosConsumidos.length] 
                )
                < 
                Math.max.apply(
                    null,
                    [c2.getProdutosConsumidos.length, c2.getServicosConsumidos.length] 
                )
                ) {
                return 1
            }
            return -1
        });
        //console.log(ranking);
        return ranking.slice(0, 10);
    }

    //1; 2; 3; 4; 5; 6; ...

    public listar(): void {
        let opcao = this.opcoes();
        switch (opcao) {
            case 1:
                let lista = this.op1();
                lista.forEach(c => {
                    let txt = '';
                    if (Math.max.apply(null, [c.getProdutosConsumidos.length, c.getServicosConsumidos.length])
                    === c.getProdutosConsumidos.length
                    ) {
                        txt = `${c.getProdutosConsumidos.length} produtos consumidos;`;
                    } else {
                        txt = `${c.getServicosConsumidos.length} serviços consumidos;`;
                    }

                    console.log(`\n> ${c.nome} - ${txt}`);
                });
                break;
        }
    }
}