import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Telefone from "../../modelo/telefone";
import Cadastro from "../cadastro";
import ListagemClienteIndice from "../cliente/listagemClienteIndice";

export default class AdicaoTelefone extends Cadastro {
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
        let ddd = this.entrada.receberTexto('Insira o DDD do telefone: ');
        let numero = this.entrada.receberTexto('Insira o número de telefone (Desconsidere o DDD)');
        let telefone = new Telefone(ddd, numero);

        console.log(`Telefone inserido: (${telefone.getDdd}) ${telefone.getNumero}`);
        let running = true;
        while(running){
            console.log('Cadastrar telefone?\n1 - Sim\n2 - Não\n')
            let confirmacao = this.entrada.receberNumero('Resposta: ');
            switch(confirmacao){
                case 1:
                    cliente.addTelefone(telefone);
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