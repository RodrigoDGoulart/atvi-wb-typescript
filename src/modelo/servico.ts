export default class Servico {
    public nome!: string
    public cod!:number
    public valor: number
    public consumo:number

    constructor(nome: string, cod: number, valor:number) {
        this.nome = nome;
        this.cod = cod;
        this.valor = valor;
        this.consumo = 0;
    }

    public addConsumo(){
        this.consumo += 1;
    }
}