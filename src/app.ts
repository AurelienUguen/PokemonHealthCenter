import { Machine } from "./machine.js";
import { Pokemon } from "./pokemon.js";


const machine = new Machine (6);

let pokedex : {[key: string]: Pokemon} = {
    pikachu : new Pokemon('Pikachu', 'Pikaaaachhuuuu', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png', 150),
    // salameche : new Pokemon('Salameche', 'salaaameche', 'https://tinyurl.com/2w4dykhy', 200),
    carapuce : new Pokemon('Carapuce', 'carapuuuce', 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png', 90),
    evoli : new Pokemon('Evoli', 'evoliii', 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/133.png', 110),
    canartichau : new Pokemon('Canarticho', 'canartichauuu', 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/083.png', 300),
    psykokwak : new Pokemon('Psykokwak', 'psykokwaaak', 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/054.png', 100),
    ptitard: new Pokemon('Ptitard', 'ptitaaaard', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png', 100),
};

const pokeKeys = Object.keys(pokedex);


pokedex.pikachu.wound(200);
pokedex.evoli.wound(10);
pokedex.psykokwak.wound(15);
pokedex.canartichau.wound(10);

let woundedPokemon  = [];

function isWounded(){

    Object.keys(pokeKeys).forEach()

}
const backgroundElt = document.querySelector('.background');
const cards = document.querySelector('.cards');
// function isWounded(){

//     for(let i = 0; i < pokeKeys.length;i++){
        
//         if(pokedex[pokeKeys[i]].pv < pokedex[pokeKeys[i]].maxPv){
//             console.log( woundedPokemon.push(pokedex[pokeKeys[i]]));
//             console.log('a la noix');
//         }
//     }
// }
console.log(woundedPokemon);
isWounded();


// machine.regen(pokedex[pokeKeys[i]]);

backgroundElt.style.width = '1000px'
backgroundElt.style.height = '600px'

function createCard(title: string, imageUrl: string) {

    const card = document.createElement("div");
    card.classList.add("card");
    cards?.appendChild(card);

    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header")
    card.appendChild(cardHeader);

    const cardImg = document.createElement("div");
    cardImg.style.backgroundImage = `url(${imageUrl})`;
    cardImg.classList.add("card-img");
    card.appendChild(cardImg);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);

    const cardTitle = document.createElement("h2");
    cardTitle.innerHTML = `${title}`;
    cardTitle.classList.add("card-title");
    cardBody.appendChild(cardTitle);

    const cardHealth = document.createElement("progress");
    cardHealth.classList.add('bar');
    cardBody.appendChild(cardHealth);

    cardImg.style.width = '100px';
    cardImg.style.height = '100px';
}

for (let i = 0; i < pokeKeys.length ; i++) {
    createCard(pokedex[pokeKeys[i]].name, pokedex[pokeKeys[i]].image);
} 