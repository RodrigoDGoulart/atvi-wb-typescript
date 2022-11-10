export default class Servico {
    public nome!: string
    public cod!:number
    public consumido!:number

    constructor(nome: string, cod: number) {
        this.nome = nome;
        this.cod = cod;
    }

    public addConsumo(){
        this.consumido += 1;
    }
}