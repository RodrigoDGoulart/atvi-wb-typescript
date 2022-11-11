import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import ListagemClienteIndice from "../cliente/listagemClienteIndice";
import Exclusao from "../exclusao";
import ListagemTelefone from "./listagemTelefone";

export default class RemocaoTelefone extends Exclusao {
    private clientes: Array<Cliente>
    private entrada: Entrada
    
    constructor(clientes: Array<Cliente>){
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
    }
    
    public excluir(): void {
        console.log('\nPor favor, selecione o cliente a partir do índice informado da lista abaixo: ');
        let listaCliente = new ListagemClienteIndice(this.clientes);
        listaCliente.listar();
        let cliente = listaCliente.validar() as Cliente;
        console.log(`\nCliente escolhido: ${cliente.nome}`);

        if (cliente.getTelefones.length === 0) {
            console.log('Erro: Cliente não possui nenhum telefone cadastrado');
        } else {
            let listaTelefone = new ListagemTelefone(cliente)
            listaTelefone.listar();
            let indice = listaTelefone.validarIndice() as number;
            let telefone = cliente.getTelefones[indice];

            let running = true;
            while(running){
                console.log(`Confirma exclusão do telefone (${telefone.getDdd}) ${telefone.getNumero} do cliente ${cliente.nome}?\n1 - Sim\n2 - Não`);
                let opcao = this.entrada.receberNumero('Resposta: ');
                switch(opcao){
                    case 1:
                        cliente.delTelefone(indice);
                        running = false;
                        console.log('Exclusão concluída');
                        break;
                    case 2:
                        console.log('Exclusão cancelada');
                        running = false;
                        break;
                    default:
                        console.log('Comando não compreendido');
                }
            }
        }
    }

}