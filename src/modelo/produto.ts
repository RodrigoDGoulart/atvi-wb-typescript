export default class Produto {
    public nome!: string
    public cod!:number
    public consumo!:number

    constructor(nome: string, cod: number) {
        this.nome = nome;
        this.cod = cod
    }

    public addConsumo(){
        this.consumo += 1;
    }
}