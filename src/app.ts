import { Machine } from "./machine.js";
import { Pokemon } from "./pokemon.js";


const machine = new Machine (6);
const pikachu = new Pokemon('Pikachu', 'Pikaaaachhuuuu', 'joliPik', 100);

//pikachu.pv = 10;
console.log(pikachu.wound(50));
machine.regen(pikachu);
console.log(pikachu);

