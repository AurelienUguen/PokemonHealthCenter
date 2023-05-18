import { Machine } from "./machine.js";
import { Pokemon } from "./pokemon.js";


const machine = new Machine(6);
const pikachu = new Pokemon('Pikachu', 'Pikaaaachhuuuu', 'joliPik', 100);
pikachu.pv = 50;

console.log(pikachu);

pikachu.regen();
console.log(pikachu);