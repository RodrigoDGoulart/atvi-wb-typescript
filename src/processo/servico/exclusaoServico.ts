import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Exclusao from "../exclusao";

export default class ExclusaoServico extends Exclusao {
    private servicos: Array<Servico>
    private entrada: Entrada
    
    constructor(servicos: Array<Servico>){
        super();
        this.servicos = servicos;
        this.entrada = new Entrada();
    }

    public excluir(): void {
        console.log('\n Início de exclusão do servico');
        let indice = this.entrada.receberNumero('Por favor informe o índice do serviço a ser editado: ');
        let confirmacao = this.entrada.receberNumero(`Tem certeza em excluir o serviço ${this.servicos[indice].nome}?
        1 - Sim
        2 - Não 
        Resposta: `);
        do {
            switch(confirmacao){
                case 1:
                    delete this.servicos[indice];
                    console.log('Serviço excluído.');
                    break;
                case 2:
                    console.log('Exclusão cancelada.');
                    break;
                default:
                    console.log('Comando não compreendido.');
            }
        } while (confirmacao < 1 || confirmacao > 2);
    }
}