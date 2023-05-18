import { Machine } from "./machine.js";
import { Pokemon } from "./pokemon.js";


const machine = new Machine (6);

let pokedex: {[key: string]: Pokemon} = {
    pikachu : new Pokemon('Pikachu', 'Pikaaaachhuuuu', 'joliPik', 150),
    salameche : new Pokemon('salameche', 'salaaameche', 'joliPik', 200),
    carapuce : new Pokemon('carapuce', 'carapuuuce', 'joliPik', 90),
    evoli : new Pokemon('evoli', 'evoliii', 'joliPik', 110),
    canartichau : new Pokemon('canartichau', 'canartichauuu', 'joliPik', 300),
    psykokwak : new Pokemon('psykokwak', 'psykokwaaak', 'joliPik', 100),
    ptitard: new Pokemon('ptitard', 'ptitaaaard', 'joliPik', 100),
};

const pokeKeys = Object.keys(pokedex);

console.log(pokeKeys);
pokedex.pikachu.wound(150);

for (let i = 0; i < pokeKeys.length; i++){
    const pokemon = pokedex[pokeKeys[i]];
    console.log(pokemon);
    if(pokedex[pokeKeys[i]].pv < pokedex[pokeKeys[i]].maxPv){
        console.log("coucou");
        console.log(pokedex[pokeKeys[i]].pv);
        machine.regen(pokedex[pokeKeys[i]]);
    }
}

//pikachu.pv = 10;
//machine.regen(pokedex.[pokeKeys[i]]);
console.log(pokedex);