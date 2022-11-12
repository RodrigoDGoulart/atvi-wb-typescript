import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Listagem from "../listagem";

export default class ListagemServicoCod extends Listagem {
    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(servicos: Array<Servico>){
        super();
        this.servicos = servicos;
        this.entrada = new Entrada();
    }

    public listar(): void {
        console.log('Lista de serviços: ');
        this.servicos.forEach(servico => {
            console.log(`> ${servico.nome} - R$${servico.valor} - cod.:${servico.cod}`);
        });
        console.log('\n');
    }

    public validar() {
        let running = true;
        while(running){
            let cod = this.entrada.receberNumero('Por favor informe o código do serviço: ');
            let servico = this.servicos.find(prod => prod.cod === cod);
            if (servico) {
                running = false;
                return servico;
            } else {
                console.log('Serviço não encontrado, por favor tente novamente');
            }
        }
    }
}