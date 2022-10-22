export default class Servico {
    public nome!: string
    public cod!:number

    constructor(nome: string, cod: number) {
        this.nome = nome;
        this.cod = cod;
    }
}