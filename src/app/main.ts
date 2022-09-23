import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import MainClientes from "./mainClientes";
import MainProdutos from "./mainProdutos";
import MainServicos from "./mainServicos";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Seção cliente`);
    console.log('2 - Seção produto');
    console.log('3 - Seção serviço');
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let mainClientes = new MainClientes(empresa);
            mainClientes.rodar();
            break;
        case 2:
            let mainProdutos = new MainProdutos(empresa);
            mainProdutos.rodar();
            break;
        case 3:
            let mainServicos = new MainServicos(empresa);
            mainServicos.rodar();
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}