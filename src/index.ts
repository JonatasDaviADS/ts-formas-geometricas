import { Forma } from "./Forma";
import { Quadrado } from "./Quadrado";
import { Retangulo } from "./Retangulo";
import { Triangulo } from "./Triangulo";
import { Circulo } from "./Circulo";

const formas: Forma[] = [
    new Quadrado(4),
    new Retangulo(5, 3,),
    new Triangulo(6, 4),
    new Circulo(2),
];

console.log("=== Áreas das formas geométricas ====");

for (const forma of formas) {
    console.log(`${forma.nome}: área = ${forma.CalcularArea().toFixed(2)}`);
}