import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Edicao from "../edicao";

export default class EdicaoServico extends Edicao {
    private servicos: Array<Servico>
    private entrada: Entrada
    
    constructor(servicos: Array<Servico>){
        super();
        this.servicos = servicos;
        this.entrada = new Entrada();
    }

    public editar(): void {
        console.log('\n Início de edição do serviço');
        let antigoServico = undefined
        while (antigoServico == undefined) {
            let codigo = this.entrada.receberNumero('Por favor informe o código do serviço a ser editado: ');
            antigoServico = this.servicos.find(s => s.cod == codigo);

            if (antigoServico != undefined) {
                break;
            }
            console.log('Serviço não encontrado');
        }
        let nome = this.entrada.receberTexto(`Por favor informe o nome do serviço (Antes era ${antigoServico.nome}): `);
        let valor = this.entrada.receberNumero(`Por favor informe o vaor do serviço (Antes era ${antigoServico.valor})`);
        let novoServico = new Servico(nome, antigoServico.cod, valor);
        let indice = this.servicos.findIndex(s => antigoServico.cod == s.cod);
        this.servicos[indice] = novoServico;
        console.log('Serviço alterado');
    }
}