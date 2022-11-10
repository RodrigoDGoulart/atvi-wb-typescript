import Cliente from "../../modelo/cliente";
import Empresa from "../../modelo/empresa";
import Listagem from "../listagem";

export default class Relatorio2 extends Listagem {
    private empresa: Empresa
    constructor(empresa: Empresa) {
        super()
        this.empresa = empresa;
    }
    public listar(): void {
        // ordenando clientes em ordem de consumo do maior para menor (considernaod ambos tipos de consumo)

        console.log('\nListagem de clientes por gênero (F - M - O)')
        let lista = this.empresa.getClientes.sort((c1, c2) => {
            switch(c1.getGeneroChar()){
                case 'F':
                    return -1
                case 'M':
                    return 0
                default:
                    return 1
            }
        });

        lista.forEach(cliente => {
            console.log(`- ${cliente.nome} - ${cliente.getGenero}`)
        });
    }
}