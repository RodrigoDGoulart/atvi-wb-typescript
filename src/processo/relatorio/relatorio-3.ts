import Entrada from "../../io/entrada";
import Empresa from "../../modelo/empresa";
import Listagem from "../listagem";

export default class Relatorio3 extends Listagem {
    private empresa: Empresa
    private running: Boolean
    private entrada: Entrada
    constructor(empresa: Empresa) {
        super()
        this.empresa = empresa;
        this.running = true;
        this.entrada = new Entrada();
    }

    private listarProdutos = () => {
        let lista = this.empresa.getProdutos.sort((p1, p2) => {
            if (p1.consumo > p2.consumo) return -1
            else return 1
        });
        console.log('\nListagem geral dos produtos mais consumidos')
        lista.forEach((produto, indice) => {
            console.log(`${indice + 1}° - ${produto.nome}: consumido ${produto.consumo} vezes`)
        });
    }

    private listarServicos = () => {
        let lista = this.empresa.getServicos.sort((s1, s2) => {
            if (s1.consumo > s2.consumo) return -1
            else return 1
        });
        console.log('\nListagem geral dos serviços mais consumidos')
        lista.forEach((servico, indice) => {
            console.log(`${indice + 1}° - ${servico.nome}: consumido ${servico.consumo} vezes`)
        });
    }
    
    public listar(): void {

        while(this.running){
            console.log('\n Deseja fazer listagem de produtos ou serviços? \n1 - Produtos\n2 - Serviços\n')
            let opcao = this.entrada.receberNumero('Por favor, escolha uma opção: ');

            switch(opcao){
                case 1:
                    this.listarProdutos();
                    this.running = false;
                    break;
                case 2:
                    this.listarServicos();
                    this.running = false;
                    break;
                default:
                    console.log('Comando não compreendido\n');
            }
            
        }
        // ordenando clientes em ordem de consumo do maior para menor (considernaod ambos tipos de consumo)
    }
}