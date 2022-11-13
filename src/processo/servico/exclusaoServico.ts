import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Exclusao from "../exclusao";
import ListagemServicoCod from "./listagemServicoCod";

export default class ExclusaoProduto extends Exclusao {
    private servicos: Array<Servico>
    private entrada: Entrada
    
    constructor(servicos: Array<Servico>){
        super();
        this.servicos = servicos;
        this.entrada = new Entrada();
    }

    public excluir(): void {
        console.log('\n Início de exclusão do serviço');

        let listaServico = new ListagemServicoCod(this.servicos)
        listaServico.listar();

        let produto = listaServico.validar() as Servico;

        let running = true;
        while(running){
            console.log(`Excluir serviço ${produto.nome}?\n1 - Sim\n2 - Não`);
            let opcao = this.entrada.receberNumero('Resposta: ');
            switch(opcao){
                case 1:
                    let indice = this.servicos.findIndex(item => item.cod === produto.cod);
                    delete this.servicos[indice];
                    console.log('Exclusão concluída');
                    running = false;
                    break;
                case 2:
                    console.log('Exclusão cancelada');
                    running = false;
                    break;
                default:
                    console.log('Comando não compreendido')
            }
        }
    }
}