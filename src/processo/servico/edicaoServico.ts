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
        let indice = this.entrada.receberNumero('Por favor informe o índice do serviço a ser editado: ');
        let nome = this.entrada.receberTexto(`Por favor informe o nome do serviço (Antes era ${this.servicos[indice].nome}): `)
        let servico = new Servico(nome);
        this.servicos[indice] = servico;
        console.log('Serviço alterado');
    }
}