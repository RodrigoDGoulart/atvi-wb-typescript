import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import ListagemClienteIndice from "../cliente/listagemClienteIndice";
import Exclusao from "../exclusao";
import ListagemRg from "./listagemRg";

export default class RemocaoRG extends Exclusao {
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

        if (cliente.getRgs.length === 0) {
            console.log('Erro: Cliente não possui nenhum RG cadastrado');
        } else {
            let listaRg = new ListagemRg(cliente)
            listaRg.listar();
            
            let indice = listaRg.validarIndice() as number;
            let rg = cliente.getRgs[indice];
            
            let running = true;
            while(running){
                console.log(`Confirma exclusão do RG ${rg.getValor} Data emissão ${rg.getDataEmissao.toLocaleDateString('pt-br')} do cliente ${cliente.nome}?\n1 - Sim\n2 - Não`);
                let opcao = this.entrada.receberNumero('Resposta: ');
                switch(opcao){
                    case 1:
                        cliente.delRg(indice);
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