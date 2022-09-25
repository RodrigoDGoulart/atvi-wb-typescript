import Servico from "../../modelo/servico";
import Listagem from "../listagem";

export default class ListagemServicos extends Listagem {
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
    }
    public listar(): void {
        console.log(`\nLista de todos os serviços:`);
        console.log(`--------------------------------------`);
        this.servicos.forEach((servico, indice) => {
            console.log(`Índice: ${indice}`)
            console.log(`Nome: ` + servico.nome);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}