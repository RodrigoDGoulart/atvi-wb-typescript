import Entrada from "../../io/entrada";

export default class ValidarValor {
    constructor(){}

    public validar () {
        let running = true;
        while(running){
            let valor = new Entrada().receberNumero('');
            if (valor) {
                running = false;
                return valor
            } else {
                console.log('Valor inválido');
                console.log("Dica: Insira o valor como no exemplo: 99.99");
            }
        }
    }
}