import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import RG from "../../modelo/rg";
import Cadastro from "../cadastro";
import ListagemClienteIndice from "../cliente/listagemClienteIndice";
import ReceberData from "./receberData";

export default class AdicaoRG extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    
    constructor(clientes: Array<Cliente>){
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
    }
    
    public cadastrar(): void {
        console.log('\nPor favor, selecione o cliente a partir do índice informado da lista abaixo: ');
        let listaCliente = new ListagemClienteIndice(this.clientes);
        listaCliente.listar();
        let cliente = listaCliente.validar() as Cliente;
        console.log(`\nCliente escolhido: ${cliente.nome}`);

        console.log('Início de cadastro de telefone');
        let valor = this.entrada.receberTexto('Por favor, insira o número do RG: ');
        console.log('Por favor, insira a data de emissão do RG (formato: dd/mm/aaaa): ');
        let dataEmissao = new ReceberData().receber();
        let rg = new RG(valor, dataEmissao)
        console.log(`RG Cadastrado:\nValor: ${rg.getValor}\nData de emissão: ${rg.getDataEmissao.toLocaleDateString('pt-br')}\n`)

        let running = true;
        while(running){
            console.log('Cadastrar RG?\n1 - Sim\n2 - Não\n')
            let confirmacao = this.entrada.receberNumero('Resposta: ');
            switch(confirmacao){
                case 1:
                    cliente.addRg(rg);
                    console.log('Cadastro concluído');
                    running = false;
                    break;
                case 2:
                    console.log('Cadastro cancelado');
                    running = false;
                    break;
                default:
                    console.log('Comando não compreendido');
            }
        }
    }

}