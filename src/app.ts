import { Machine } from "./machine.js";
import { Pokemon } from "./pokemon.js";

// Instance de la Machine a soigné les Pokeymaunes //
const machine = new Machine(6);

// List de nos instances de Pokeymaunes //
let pokedex: { [key: string]: Pokemon } = {
    pikachu: new Pokemon('Pikachu', 'Pikaaaachhuuuu', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png', 150),
    salameche: new Pokemon('Salameche', 'salaaameche', 'https://tinyurl.com/2w4dykhy', 200),
    carapuce: new Pokemon('Carapuce', 'carapuuuce', 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png', 90),
    evoli: new Pokemon('evoli', 'evoliii', 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/133.png', 110),
    canartichau: new Pokemon('canartichau', 'canartichauuu', 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/083.png', 300),
    psykokwak: new Pokemon('psykokwak', 'psykokwaaak', 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/054.png', 100),
    ptitard: new Pokemon('ptitard', 'ptitaaaard', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png', 100),
};

pokedex.pikachu.wound(200);
pokedex.canartichau.wound(10);

// Variable qui accumule les Pokeymaunes bléssés ou hors jeux //
let woundedPokemon: string[] = [];

// Fonction de remplissage de la liste de Pokeymaunes bléssés ou hors jeux //
function isWounded() {
    Object.keys(pokedex).forEach(function (pokemon) {
        if (pokedex[pokemon].pv < pokedex[pokemon].maxPv) {
            if(!woundedPokemon.includes(pokemon)){
                woundedPokemon = woundedPokemon.concat(pokemon);
            }
        }
    });
    console.log(woundedPokemon);
}

function heal(list: string[]){
    for(let i = 0; i < list.length; i++){
        console.log(pokedex[list[i]].name+" à "+pokedex[list[i]].pv+" Pts de vie sur "+pokedex[list[i]].maxPv+" avant les soins");
        pokedex[list[i]].pv = pokedex[list[i]].maxPv;
        console.log(pokedex[list[i]].name+" à "+pokedex[list[i]].pv+" Pts de vie sur "+pokedex[list[i]].maxPv+" après les soins");
    }

}
const backgroundElt = document.querySelector('.background')! as HTMLElement;
console.log(backgroundElt);
const cards = document.querySelector('.cards');

backgroundElt.style.width = '1000px';
backgroundElt.style.height = '600px';

/*
* title = pokedex[woundedPokemon[?]].name
* imageUrl = pokedex[woundedPokemon[?]].image
* scream = pokedex[woundedPokemon[?]].scream
* maxPv = pokedex[woundedPokemon[?]].maxPv
*/
function createCard(title: string, imageUrl: string, scream: string, maxPv: number) {

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

createCard('Carapuce', 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png', 'ouch!!', 150);



// les fonctions des boutons //

const btnWoundedElmt = document.querySelector('.btn-wounded');
const btnHealedElmt = document.querySelector('.btn-healed');

btnWoundedElmt?.addEventListener('click', () => {
    console.log('Wound');
    isWounded();
    console.log(pokedex[woundedPokemon[0]]);
})

btnHealedElmt?.addEventListener('click', () => {
    console.log('heal');
    heal(woundedPokemon);
    woundedPokemon = [];
    console.log(woundedPokemon);
})