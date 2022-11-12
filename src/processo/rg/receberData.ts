import { isDate } from "util/types";
import Entrada from "../../io/entrada";

export default class ReceberData {
    private entrada: Entrada

    constructor(){
        this.entrada = new Entrada();
    }

    public receber = () => {
        let running = true;
        while (running) {
            let dataEmissaoString = this.entrada.receberTexto('');
            let dataEmissaoArray = dataEmissaoString.split('/');
            dataEmissaoString = `${dataEmissaoArray[2]}-${dataEmissaoArray[1]}-${dataEmissaoArray[0]}`;
            let dataEmissao = new Date(dataEmissaoString);
            if (dataEmissao.getTime() === dataEmissao.getTime()) {
                running = false;
                return dataEmissao;
            } else {
                console.log('Data inválida.\n');
            }
        }
    }
}