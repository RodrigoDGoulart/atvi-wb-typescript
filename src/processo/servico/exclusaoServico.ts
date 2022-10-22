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
        console.log('\n Início de exclusão do serviço');
        let servico = undefined;
        while (servico == undefined) {
            let cod = this.entrada.receberNumero('Por favor informe o código do serviço a ser editado: ');
            servico = this.servicos.find(p => p.cod == cod);
            if (servico != undefined) {
                break;
            }
            console.log('Serviço não encontrado');
        }
        let confirmacao = this.entrada.receberNumero(`Tem certeza em excluir o serviço ${servico.nome}?
        1 - Sim
        2 - Não 
        Resposta: `);
        do {
            switch(confirmacao){
                case 1:
                    delete this.servicos[this.servicos.indexOf(servico)];
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