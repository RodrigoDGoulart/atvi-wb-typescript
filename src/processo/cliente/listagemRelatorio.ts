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
            let txt = 'Qual tipo de relatório deseja?\n1 - 10 Clientes que mais consumiram produtos ou serviços em QUANTIDADE\n2 - Listagem dos clientes por gênero\n'
            let escolha = this.entrada.receberNumero(txt);
            switch (escolha){
                case 1:
                    return 1
                case 2:
                    return 2
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

    private op2():Cliente[]{
        let ranking = this.clientes.sort((c1, c2) => {
            // F - M - O
            
            const genToInt = (gen: string) => {
                switch(gen){
                    case 'F':
                        return 2
                        case 'M':
                            return 1
                            default:
                                return 0
                            }
            }
                        
            let generoc1 = genToInt(c1.getGeneroChar());
            let generoc2 = genToInt(c2.getGeneroChar());

            return generoc2 - generoc1
        });
        //console.log(ranking);
        return ranking;
    }

    //1; 2; 3; 4; 5; 6; ...

    public listar(): void {
        let opcao = this.opcoes();
        switch (opcao) {
            case 1:
                let lista1 = this.op1();
                lista1.forEach(c => {
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
            case 2:
                let lista2 = this.op2();
                console.log('');
                lista2.forEach(c => {
                    console.log(`${c.nome} - ${c.getGenero}`)
                });
        }
    }
}