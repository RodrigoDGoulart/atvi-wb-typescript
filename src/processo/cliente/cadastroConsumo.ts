import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Empresa from "../../modelo/empresa";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";
import Cadastro from "../cadastro";
import ListagemProdutoCod from "../produto/listagemProdutoCod";
import ListagemServicoCod from "../servico/listagemServicoCod";
import ListagemClienteIndice from "./listagemClienteIndice";

export default class CadastroConsumo extends Cadastro {
    private empresa: Empresa;
    private entrada: Entrada;
    private cliente: Cliente;

    constructor(empresa: Empresa) {
        super();
        this.entrada = new Entrada();
        this.empresa = empresa;
    }

    private cadastrarProduto = () => {
        let listaProduto = new ListagemProdutoCod(this.empresa.getProdutos);
        listaProduto.listar();
        let produto = listaProduto.validar() as Produto;
        
        console.log(`Produto selecionado:\nNome: ${produto.nome} - Valor: R$${produto.valor} - cod.: ${produto.cod}`);

        console.log(`Adicionar produto ${produto.nome} ao cliente ${this.cliente.nome}?\n1 - Sim\n2 - Não`);
        let running = true;
        while(running){
            let opcao = this.entrada.receberNumero('Resposta: ');
            switch(opcao){
                case 1:
                    this.cliente.addProdutoConsumido(produto);
                    produto.addConsumo();
                    console.log('Adição de consumo CONCLUÍDA.');
                    running = false;
                    break;
                case 2:
                    console.log('Adição de consumo CANCELADA.');
                    running = false;
                    break;
                default:
                    console.log('Comando não compreendido')
            }
        }
    }

    private cadastrarServico = () => {
        let listaServico = new ListagemServicoCod(this.empresa.getServicos);
        listaServico.listar();
        let servico = listaServico.validar() as Servico;
        
        console.log(`Serviço selecionado:\nNome: ${servico.nome} - Valor: R$${servico.valor} - cod.: ${servico.cod}`);

        console.log(`Adicionar serviço ${servico.nome} ao cliente ${this.cliente.nome}?\n1 - Sim\n2 - Não`);
        let running = true;
        while(running){
            let opcao = this.entrada.receberNumero('Resposta: ');
            switch(opcao){
                case 1:
                    this.cliente.addProdutoConsumido(servico);
                    servico.addConsumo();
                    console.log('Adição de consumo CONCLUÍDA.');
                    running = false;
                    break;
                case 2:
                    console.log('Adição de consumo CANCELADA.');
                    running = false;
                    break;
                default:
                    console.log('Comando não compreendido')
            }
        }
    }

    public cadastrar(): void {
        console.log('Ínicio de cadastro de consumo');

        let listaCliente = new ListagemClienteIndice(this.empresa.getClientes);
        listaCliente.listar();
        this.cliente = listaCliente.validar() as Cliente;
        console.log(`Cliente ${this.cliente.nome} selecionado.`)
        
        console.log('Deseja cadastrar consumo de produto ou serviço?\n1 - Produto\n2 - Serviço');
        let running = true;
        while(running){
            let opcao = this.entrada.receberNumero('Escolha: ');
            switch(opcao){
                case 1:
                    this.cadastrarProduto();
                    running = false;
                    break;
                case 2:
                    this.cadastrarServico();
                    running = false;
                    break;
                default:
                    console.log('Comando não compreendido');
            }
        }
    }

    
}
