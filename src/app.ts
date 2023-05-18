import { Machine } from "./machine.js";
import { Pokemon } from "./pokemon.js";


const machine = new Machine (6);

let pokedex : {[key: string]: Pokemon} = {
    pikachu : new Pokemon('Pikachu', 'Pikaaaachhuuuu', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png', 150),
    salameche : new Pokemon('Salameche', 'salaaameche', 'joliPik', 200),
    carapuce : new Pokemon('Carapuce', 'carapuuuce', 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png', 90),
    evoli : new Pokemon('evoli', 'evoliii', 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/133.png', 110),
    canartichau : new Pokemon('canartichau', 'canartichauuu', 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/083.png', 300),
    psykokwak : new Pokemon('psykokwak', 'psykokwaaak', 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/054.png', 100),
    ptitard: new Pokemon('ptitard', 'ptitaaaard', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png', 100),
};

const pokeKeys = Object.keys(pokedex);

console.log(pokeKeys);
pokedex.pikachu.wound(150);

let woundedPokemon = [];

for (let i = 0; i < pokeKeys.length;i++){
    if(pokedex[pokeKeys[i]].pv < pokedex[pokeKeys[i]].maxPv){
        console.log("coucou");
        console.log(pokedex[pokeKeys[i]].pv);
        machine.regen(pokedex[pokeKeys[i]]);
    }
}

