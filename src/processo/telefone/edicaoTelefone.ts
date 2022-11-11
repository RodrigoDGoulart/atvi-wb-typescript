import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Telefone from "../../modelo/telefone";
import ListagemClienteIndice from "../cliente/listagemClienteIndice";
import Edicao from "../edicao";
import ListagemTelefone from "./listagemTelefone";

export default class EdicaoTelefone extends Edicao {
    private clientes: Array<Cliente>
    private entrada: Entrada
    
    constructor(clientes: Array<Cliente>){
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
    }
    
    public editar(): void {
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

            console.log('Ínicio de edição de telefone');
            let ddd = this.entrada.receberTexto(`Insira o DDD do telefone (Antes era ${telefone.getDdd}): `);
            let numero = this.entrada.receberTexto(`Insira o número de telefone (Desconsidere DDD, antes era ${telefone.getNumero}): `);
            let novoTelefone = new Telefone(ddd, numero);

            let running = true;
            while(running){
                console.log(`Confirma edição do antigo telefone (${telefone.getDdd}) ${telefone.getNumero} para (${novoTelefone.getDdd}) ${novoTelefone.getNumero}?\n1 - Sim\n2 - Não`);
                let opcao = this.entrada.receberNumero('Resposta: ');
                switch(opcao){
                    case 1:
                        cliente.getTelefones[indice] = novoTelefone;
                        console.log('Edição concluída');
                        running = false;
                        break;
                    case 2:
                        console.log('Edição cancelada');
                        running = false;
                        break;
                    default:
                        console.log('Comando não compreendido');
                }
            }
        }
    }

}