import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import RG from "../../modelo/rg";
import ListagemClienteIndice from "../cliente/listagemClienteIndice";
import Edicao from "../edicao";
import ListagemRg from "./listagemRg";
import ReceberData from "./receberData";

export default class EdicaoRg extends Edicao {
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

        if (cliente.getRgs.length === 0) {
            console.log('Erro: Cliente não possui nenhum RG cadastrado');
        } else {
            let listaRg = new ListagemRg(cliente)
            listaRg.listar();
            let indice = listaRg.validarIndice() as number;
            let rg = cliente.getRgs[indice];

            console.log('Ínicio de edição de RG');
            let valor = this.entrada.receberTexto(`Insira o número do RG (Antes era ${rg.getValor}): `);
            console.log(`Por favor informe a data de emissão no formato dd/mm/aaaa (Antes era ${rg.getDataEmissao.toLocaleDateString('pt-br')})`);
            let data = new ReceberData().receber();
            let novoRg = new RG(valor, data);

            let running = true;
            while(running){
                console.log(`Confirma edição do antigo RG ${rg.getValor} Data de Emissão ${rg.getDataEmissao.toLocaleDateString('pt-br')} para RG ${novoRg.getValor} Data de Emissão ${novoRg.getDataEmissao.toLocaleDateString('pt-br')}?\n1 - Sim\n2 - Não`);
                let opcao = this.entrada.receberNumero('Resposta: ');
                switch(opcao){
                    case 1:
                        cliente.getRgs[indice] = novoRg;
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