import { Forma } from "./Forma";

export class Circulo extends Forma {
    public raio: number;

    constructor(raio: number) {
        super("Círculo");
        this.raio = raio;
    }

    public CalcularArea(): number {
        return Math.PI * this.raio ** 2;
    }
}