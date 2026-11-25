import { Forma } from "./Forma";

export class Retangulo extends Forma {
    public base: number;
    public altura: number;

    constructor(base: number, altura: number) {
        super("Retângulo");
        this.base = base;
        this.altura = altura;
    }

    public CalcularArea(): number {
        return this.base * this.altura;
    }
}