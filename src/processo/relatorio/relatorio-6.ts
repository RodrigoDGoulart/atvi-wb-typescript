import Empresa from "../../modelo/empresa";
import Listagem from "../listagem";

export default class Relatorio6 extends Listagem {
    private empresa: Empresa
    constructor(empresa: Empresa) {
        super()
        this.empresa = empresa;
    }
    public listar(): void {
        const getValorTotal = (array) => {
            let total = 0;
            array.forEach(item => {
                total = total + item.valor
            });
            return total;
        }

        let lista = this.empresa.getClientes
        let listaProduto = [];
        let listaServico = [];

        // copiando lista de clientes para ambas as listas para não afetar a lista principal
        lista.forEach(cliente => {
            listaProduto.push(cliente);
            listaServico.push(cliente);
        });

        // ordenando as listas copiadas
        listaProduto.sort((c1, c2) => {
            let consumoC1 = getValorTotal(c1.getProdutosConsumidos);
            let consumoC2 = getValorTotal(c2.getProdutosConsumidos);
            if (consumoC1 > consumoC2) {return -1}
            return 1
        });
        listaServico.sort((c1, c2) => {
            let consumoC1 = getValorTotal(c1.getServicosConsumidos);
            let consumoC2 = getValorTotal(c2.getServicosConsumidos);
            if (consumoC1 > consumoC2) {return -1}
            return 1
        });

        console.log('\nListagem de 5 clientes que MAIS consumiram produtos em VALOR');
        listaProduto.forEach((cliente, indice) => {
            let txt = `${indice + 1}° - R$${getValorTotal(cliente.getProdutosConsumidos)} em produtos consumidos`

            console.log(`${indice + 1}° - ${cliente.nome}: ${txt}`)
        });
        console.log('\nListagem de 5 clientes que MAIS consumiram serviços em VALOR');
        listaServico.forEach((cliente, indice) => {
            let txt = `${indice + 1}° - R$${getValorTotal(cliente.getServicosConsumidos)} em produtos consumidos`

            console.log(`${indice + 1}° - ${cliente.nome}: ${txt}`)
        })
    }
}