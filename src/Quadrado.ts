import { Forma } from "./Forma";


export class Quadrado extends Forma {
    public lado: number;

    constructor(lado: number) {
        super("Quadrado");
        this.lado = lado;
    }


    public CalcularArea(): number {
        return this.lado ** 2;
    }
}