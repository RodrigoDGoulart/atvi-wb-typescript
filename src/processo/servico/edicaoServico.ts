import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Edicao from "../edicao";
import ListagemServicoCod from "./listagemServicoCod";
import ValidarValor from "./validarValor";

export default class EdicaoProduto extends Edicao {
    private servico: Array<Servico>
    private entrada: Entrada
    
    constructor(servico: Array<Servico>){
        super();
        this.servico = servico;
        this.entrada = new Entrada();
    }

    public editar(): void {
        console.log('\n Início de edição do produto');

        let listaServico = new ListagemServicoCod(this.servico)
        listaServico.listar();
        
        let antigoServico = listaServico.validar() as Servico;
        let nome = this.entrada.receberTexto(`Por favor informe o nome do serviço (Antes era ${antigoServico.nome}): `);
        console.log(`Por favor informe o valor do serviço (Antes era R$${antigoServico.valor})`);
        let valor = new ValidarValor().validar() as number;
        let novoServico = new Servico(nome, antigoServico.cod, valor);
        console.log(`Trocar serviço ${antigoServico.nome} valor R$${antigoServico.valor} por ${novoServico.nome} valor R$${novoServico.valor}?\n1 - Sim\n2 - Não`);
        let resposta = this.entrada.receberNumero('Resposta: ');
        let running = true;
        while(running){
            switch(resposta){
                case 1:
                    let indice = this.servico.findIndex(produto => antigoServico.cod == produto.cod);
                    this.servico[indice] = novoServico;
                    console.log('Alteração de serviço CONCLUÍDA');
                    running = false;
                    break;
                case 2:
                    console.log('Alteração de serviço CANCELADA');
                    running = false;
                    break;
                default:
                    console.log('Comando não compreendido');
            }
        }
    }
}