import { Forma } from "./Forma";

export class Triangulo extends Forma {
    public base: number;
    public altura: number;

    constructor(base: number, altura: number) {
        super("Triângulo Retângulo");
        this.base = base;
        this.altura = altura;
    }

    public CalcularArea(): number {
        return (this.base * this.altura) / 2;
    }
}