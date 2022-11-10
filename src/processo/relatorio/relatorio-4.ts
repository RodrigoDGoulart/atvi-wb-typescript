import Empresa from "../../modelo/empresa";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";
import Listagem from "../listagem";

export default class Relatorio4 extends Listagem {
    private empresa: Empresa
    constructor(empresa: Empresa) {
        super()
        this.empresa = empresa;
    }

    private listaProduto = {
        listaFem: [],
        listaMasc: [],
        listaOutros: []
    }

    private listaServico = {
        listaFem: [],
        listaMasc: [],
        listaOutros: []
    }

    private registrarItens = () => {
        this.empresa.getClientes.forEach(cliente => {
            cliente.getProdutosConsumidos.forEach(p => {
                let produto = new Produto(p.nome, p.cod, p.valor);
                switch(cliente.getGeneroChar()){
                    case 'F':
                        if (this.listaProduto.listaFem.length == 0) {
                            produto.addConsumo();
                            this.listaProduto.listaFem.push(produto);
                        } else {
                            let produtoEncontrado = this.listaProduto.listaFem.find(prod => {
                                return produto.cod == prod.cod
                            });
                            if (produtoEncontrado == undefined){
                                produto.addConsumo();
                                this.listaProduto.listaFem.push(produto);
                            } else {
                                produtoEncontrado.addConsumo();
                            }
                        }
                        break;
                    case 'M':
                        if (this.listaProduto.listaMasc.length == 0) {
                            produto.addConsumo();
                            this.listaProduto.listaMasc.push(produto);
                        } else {
                            let produtoEncontrado = this.listaProduto.listaMasc.find(prod => {
                                return produto.cod == prod.cod
                            });
                            if (produtoEncontrado == undefined){
                                produto.addConsumo();
                                this.listaProduto.listaMasc.push(produto);
                            } else {
                                produtoEncontrado.addConsumo();
                            }
                        }
                        break;
                    default:
                        if (this.listaProduto.listaOutros.length == 0) {
                            produto.addConsumo();
                            this.listaProduto.listaOutros.push(produto);
                        } else {
                            let produtoEncontrado = this.listaProduto.listaOutros.find(prod => {
                                return produto.cod == prod.cod
                            });
                            if (produtoEncontrado == undefined){
                                produto.addConsumo();
                                this.listaProduto.listaOutros.push(produto);
                            } else {
                                produtoEncontrado.addConsumo();
                            }
                        }
                }
            });
            cliente.getServicosConsumidos.forEach(s => {
                let servico = new Servico(s.nome, s.cod, s.valor);
                switch(cliente.getGeneroChar()){
                    case 'F':
                        if (this.listaServico.listaFem.length == 0) {
                            servico.addConsumo();
                            this.listaServico.listaFem.push(servico);
                        } else {
                            let servicoEncontrado = this.listaServico.listaFem.find(serv => {
                                return servico.cod == serv.cod
                            });
                            if (servicoEncontrado == undefined){
                                servico.addConsumo();
                                this.listaServico.listaFem.push(servico);
                            } else {
                                servicoEncontrado.addConsumo();
                            }
                        }
                        break;
                    case 'M':
                        if (this.listaServico.listaMasc.length == 0) {
                            servico.addConsumo();
                            this.listaServico.listaMasc.push(servico);
                        } else {
                            let servicoEncontrado = this.listaServico.listaMasc.find(prod => {
                                return servico.cod == prod.cod
                            });
                            if (servicoEncontrado == undefined){
                                servico.addConsumo();
                                this.listaServico.listaMasc.push(servico);
                            } else {
                                servicoEncontrado.addConsumo();
                            }
                        }
                        break;
                    default:
                        if (this.listaServico.listaOutros.length == 0) {
                            servico.addConsumo();
                            this.listaServico.listaOutros.push(servico);
                        } else {
                            let servicoEncontrado = this.listaServico.listaOutros.find(prod => {
                                return servico.cod == prod.cod
                            });
                            if (servicoEncontrado == undefined){
                                servico.addConsumo();
                                this.listaServico.listaOutros.push(servico);
                            } else {
                                servicoEncontrado.addConsumo();
                            }
                        }
                }
            });
        });
        let listaLista = [
            this.listaProduto.listaFem, this.listaProduto.listaMasc, this.listaProduto.listaOutros,
            this.listaServico.listaFem, this.listaServico.listaMasc, this.listaServico.listaOutros
        ]
        listaLista.forEach(lista => {
            lista.sort((item1, item2) => {
                if (item1.consumo > item2.consumo) return -1
                else return 1
            });
        })
    }

    public listar(): void {
        this.registrarItens();
        console.log('\nLista de produtos mais consumidos pelo público...')
        console.log('\nFEMININO')
        this.listaProduto.listaFem.forEach(produto => {
            console.log(`- ${produto.nome}: Consumido ${produto.consumo} vezes`)
        });
        console.log('---------------');
        console.log('\nMASCULINO')
        this.listaProduto.listaMasc.forEach(produto => {
            console.log(`- ${produto.nome}: Consumido ${produto.consumo} vezes`)
        });
        console.log('---------------');
        console.log('\nNÃO-BINÁRIO')
        this.listaProduto.listaOutros.forEach(produto => {
            console.log(`- ${produto.nome}: Consumido ${produto.consumo} vezes`)
        });
        console.log('\nLista de serviços mais consumidos pelo público...');
        console.log('\nFEMININO')
        this.listaServico.listaFem.forEach(servico => {
            console.log(`- ${servico.nome}: Consumido ${servico.consumo} vezes`)
        });
        console.log('---------------');
        console.log('\nMASCULINO')
        this.listaServico.listaMasc.forEach(servico => {
            console.log(`- ${servico.nome}: Consumido ${servico.consumo} vezes`)
        });
        console.log('---------------');
        console.log('\nNÃO-BINÁRIO')
        this.listaServico.listaOutros.forEach(servico => {
            console.log(`- ${servico.nome}: Consumido ${servico.consumo} vezes`)
        });
        // ordenando clientes em ordem de consumo do maior para menor (considernaod ambos tipos de consumo)

    }
}