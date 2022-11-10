export default class Servico {
    public nome!: string
    public cod!:number
    public consumo:number

    constructor(nome: string, cod: number) {
        this.nome = nome;
        this.cod = cod;
        this.consumo = 0;
    }

    public addConsumo(){
        this.consumo += 1;
    }
}