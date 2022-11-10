import Empresa from "../../modelo/empresa";
import Listagem from "../listagem";

export default class Relatorio5 extends Listagem {
    private empresa: Empresa
    constructor(empresa: Empresa) {
        super()
        this.empresa = empresa;
    }
    public listar(): void {
        // ordenando clientes em ordem de consumo do maior para menor (considernaod ambos tipos de consumo)

        const getMaior = (produto, servico) => {
            if (produto > servico) return produto
            return servico
        }

        let lista = this.empresa.getClientes
        lista.sort((c1, c2) => {
            let consumoC1 = getMaior(c1.getProdutosConsumidos.length, c1.getServicosConsumidos.length);
            let consumoC2 = getMaior(c2.getProdutosConsumidos.length, c2.getServicosConsumidos.length);
            if (consumoC1 > consumoC2) return 1
            else return -1
        });

        console.log('\nListagem de 10 clientes que MENOS consumiram produtos/serviços em QUANTIDADE');
        lista.forEach((cliente, indice) => {
            let txt = '';
            if (
                getMaior(cliente.getProdutosConsumidos.length, cliente.getServicosConsumidos.length) === cliente.getProdutosConsumidos.length
            ) {
                txt = `${indice + 1}° - ${cliente.getProdutosConsumidos.length} produtos consumidos`
            } else {
                txt = `${indice + 1}° - ${cliente.getServicosConsumidos.length} serviços consumidos`
            }

            console.log(`${indice + 1}° - ${cliente.nome}: ${txt}`)
        })
    }
}