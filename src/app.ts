import { Machine } from "./machine.js";
import { Pokemon } from "./pokemon.js";

// Instance de la Machine a soigné les Pokeymaunes //
const machine = new Machine(6);

// List de nos instances de Pokeymaunes //
let pokedex: { [key: string]: Pokemon } = {
    pikachu: new Pokemon(
        "Pikachu",
        "Pikaaaachhuuuu",
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
        150
    ),
    salameche: new Pokemon(
        "Salameche",
        "Salaaameche",
        "https://tinyurl.com/2w4dykhy",
        200
    ),
    carapuce: new Pokemon(
        "Carapuce",
        "Carapuuuce",
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
        90
    ),
    evoli: new Pokemon(
        "Evoli",
        "Evoliii",
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/133.png",
        110
    ),
    canartichau: new Pokemon(
        "Canarticho",
        "Canartichoooo",
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/083.png",
        300
    ),
    psykokwak: new Pokemon(
        "Psykokwak",
        "Psykokwaaak",
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/054.png",
        100
    ),
    ptitard: new Pokemon(
        "Ptitard",
        "Ptitaaaard",
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png",
        100
    ),
}

pokedex.pikachu.wound(200);
pokedex.canartichau.wound(140);
pokedex.psykokwak.wound(70);
pokedex.carapuce.wound(74);
pokedex.ptitard.wound(88);
pokedex.evoli.wound(25);
pokedex.salameche.wound(133);



// Variable qui accumule les Pokeymaunes bléssés ou hors jeux //
let woundedPokemon: string[] = [];

// Fonction de remplissage de la liste de Pokeymaunes bléssés ou hors jeux //
function isWounded() {
    Object.keys(pokedex).forEach(function (pokemon) {
        if (pokedex[pokemon].pv < pokedex[pokemon].maxPv) {
            if (!woundedPokemon.includes(pokemon)) {
                woundedPokemon = woundedPokemon.concat(pokemon);
            }
        }
    });
}

function heal(list: Pokemon[]) {
    for (let i = 0; i < list.length; i++) {
        list[i].pv = list[i].maxPv;
    }
}
const backgroundElt = document.querySelector(".background")! as HTMLElement;
const cards = document.querySelector(".cards")!;

backgroundElt.style.width = "1000px";
backgroundElt.style.height = "600px";

/*
 * title = pokedex[woundedPokemon[?]].name
 * imageUrl = pokedex[woundedPokemon[?]].image
 * scream = pokedex[woundedPokemon[?]].scream
 * maxPv = pokedex[woundedPokemon[?]].maxPv
 */

function calcHealthPerc(pv: number, maxPv: number) {
    let currentLife = Math.round((pv / maxPv) * 100) * 100 / 100;
    return currentLife + 'px';
}

function createPokemonCard(
    pokemon: Pokemon
) {
    const card = document.createElement("div");
    card.classList.add("card");
    cards?.appendChild(card);

    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    card.appendChild(cardHeader);

    const cardImg = document.createElement("div");
    cardImg.style.backgroundImage = `url(${pokemon.image})`;
    cardImg.classList.add("card-img");
    card.appendChild(cardImg);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);

    const cardTitle = document.createElement("h2");
    cardTitle.innerHTML = `${pokemon.name}`;
    cardTitle.classList.add("card-title");
    cardBody.appendChild(cardTitle);

    const cardHealthContainer = document.createElement("div");
    cardHealthContainer.classList.add("bar");
    cardBody.appendChild(cardHealthContainer);

    pokemon._healthContainer = document.createElement("div");
    pokemon._healthContainer.classList.add("health");
    cardHealthContainer.appendChild(pokemon._healthContainer);
    pokemon._healthContainer.style.width = calcHealthPerc(pokemon.pv, pokemon.maxPv)

    let actualLifeInNumber = Number(pokemon._healthContainer.style.width.replace(/[^0-9]/g, ''));

    if (actualLifeInNumber < 20) {
       pokemon._healthContainer.style.backgroundColor = '#DA2528';
    } else if (actualLifeInNumber > 20 && actualLifeInNumber < 60) {
        pokemon._healthContainer.style.backgroundColor = '#F1C40F';
    }

    cardImg.style.width = "100px";
    cardImg.style.height = "100px";
}

let listWounded: Pokemon[] = [];

function listWoundedPokemon() {
        for (let i = 0; i < woundedPokemon.length; i++) {
            if (!listWounded.includes(pokedex[woundedPokemon[i]])) {
                createPokemonCard(pokedex[woundedPokemon[i]]);
                listWounded.push(pokedex[woundedPokemon[i]]);
                if (listWounded.length === machine.storage) {
                    return;
                }
            }
        }
    }

// les fonctions des boutons //

const btnMachineElmt = document.querySelector(".button-machine") as HTMLElement;


let button: boolean;

const music = new Audio('./assets/PokeCenter2.mp3');

btnMachineElmt.addEventListener("click", () => {

    if (button) {
        heal(listWounded);
        woundedPokemon = [];
        for (let i = 0; i < listWounded.length; i++) {
            setTimeout(() => {
                const pokemon = listWounded[i];
                if (!pokemon._healthContainer) return;
                pokemon._healthContainer.style.width = '100%';
                pokemon._healthContainer.style.backgroundColor = '#00c517';
            });
        };
        btnMachineElmt.setAttribute('disabled', '');
        setTimeout(() => {btnMachineElmt.textContent = "Who is wounded ?"}, 3000);
        setTimeout(() => {cards.innerHTML = ""}, 3000);
        setTimeout(() => {btnMachineElmt.removeAttribute('disabled')}, 3000);
        music.play();
        button = false;
    } else {
        btnMachineElmt.textContent = "Heal them all !";
        cards.innerHTML = "";
        isWounded();
        listWoundedPokemon();
        if (woundedPokemon.length === 0) {
            const win = document.createElement("div");
            win.classList.add("win");
            cards.appendChild(win);
            win.textContent = "They are all healed !";
            return btnMachineElmt.textContent = "";
        }
        button = true;
    }   
});