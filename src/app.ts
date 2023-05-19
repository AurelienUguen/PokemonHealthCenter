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
        "salaaameche",
        "https://tinyurl.com/2w4dykhy",
        200
    ),
    carapuce: new Pokemon(
        "Carapuce",
        "carapuuuce",
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
        90
    ),
    evoli: new Pokemon(
        "evoli",
        "evoliii",
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/133.png",
        110
    ),
    canartichau: new Pokemon(
        "canartichau",
        "canartichauuu",
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/083.png",
        300
    ),
    psykokwak: new Pokemon(
        "psykokwak",
        "psykokwaaak",
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/054.png",
        100
    ),
    ptitard: new Pokemon(
        "ptitard",
        "ptitaaaard",
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png",
        100
    ),
    ptitarda: new Pokemon(
        "ptitard",
        "ptitaaaard",
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png",
        100
    ),
    ptitardz: new Pokemon(
        "ptitard",
        "ptitaaaard",
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png",
        100
    ),
    ptitarde: new Pokemon(
        "ptitard",
        "ptitaaaard",
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png",
        100
    ),
    ptitardr: new Pokemon(
        "ptitard",
        "ptitaaaard",
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png",
        100
    ),
    ptitardt: new Pokemon(
        "ptitard",
        "ptitaaaard",
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png",
        100
    ),
    ptitardy: new Pokemon(
        "ptitard",
        "ptitaaaard",
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png",
        100
    ),
    ptitardu: new Pokemon(
        "ptitard",
        "ptitaaaard",
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png",
        100
    ),
    ptitardi: new Pokemon(
        "ptitard",
        "ptitaaaard",
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png",
        100
    ),
    ptitardo: new Pokemon(
        "ptitard",
        "ptitaaaard",
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png",
        100
    ),
};

pokedex.pikachu.wound(200);
pokedex.canartichau.wound(10);
pokedex.psykokwak.wound(100);
pokedex.carapuce.wound(200);
pokedex.evoli.wound(100);
pokedex.salameche.wound(200);
pokedex.ptitard.wound(10);


pokedex.ptitarda.wound(10);
pokedex.ptitardz.wound(10);
pokedex.ptitarde.wound(10);
pokedex.ptitardr.wound(10);
pokedex.ptitardt.wound(10);
pokedex.ptitardy.wound(10);
pokedex.ptitardu.wound(10);
pokedex.ptitardi.wound(10);
pokedex.ptitardo.wound(10);



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

isWounded();
console.log(woundedPokemon);

function heal(list: string[]) {
    for (let i = 0; i < list.length; i++) {
        pokedex[list[i]].pv = pokedex[list[i]].maxPv;
    }
}
const backgroundElt = document.querySelector(".background")! as HTMLElement;
const backgroundPatientsElt = document.querySelector(".backgroundPatients")! as HTMLElement;
const cards = document.querySelector(".cards")!;
const cardPatients = document.querySelector(".cardPatients")!;

backgroundElt.style.width = "1000px";
backgroundElt.style.height = "600px";
backgroundPatientsElt.style.height = "600px";

/*
 * title = pokedex[woundedPokemon[?]].name
 * imageUrl = pokedex[woundedPokemon[?]].image
 * scream = pokedex[woundedPokemon[?]].scream
 * maxPv = pokedex[woundedPokemon[?]].maxPv
 */

function createCardPatient(
    title: string,
    imageUrl: string,
    scream: string,
    maxPv: number
) {
    const card = document.createElement("div");
    card.classList.add("card", "m-1");
    cardPatients?.appendChild(card);

    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    card.appendChild(cardHeader);

    const cardImg = document.createElement("div");
    cardImg.style.backgroundImage = `url(${imageUrl})`;
    cardImg.classList.add("card-img");
    card.appendChild(cardImg);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body", "m-0", "p-0");
    card.appendChild(cardBody);

    const cardTitle = document.createElement("p");
    cardTitle.innerHTML = `${title}`;
    cardTitle.classList.add("card-patient-title");
    cardBody.appendChild(cardTitle);

    cardImg.style.width = "50px";
    cardImg.style.height = "50px";
}

function createCard(
    title: string,
    imageUrl: string,
    scream: string,
    maxPv: number
) {
    const card = document.createElement("div");
    card.classList.add("card");
    cards?.appendChild(card);

    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
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
    cardHealth.classList.add("bar");
    cardBody.appendChild(cardHealth);

    cardImg.style.width = "100px";
    cardImg.style.height = "100px";
}

let listWounded: string[] = woundedPokemon.slice(0, machine.storage);
function listWoundedPokemon() {
    for (let i = 0; i < listWounded.length; i++) {
        //if (!listWounded.includes(pokedex[woundedPokemon[i]])) {
        createCard(
            pokedex[woundedPokemon[i]].name,
            pokedex[woundedPokemon[i]].image,
            pokedex[woundedPokemon[i]].scream,
            pokedex[woundedPokemon[i]].maxPv
        );
        /*
        listWounded.push(pokedex[woundedPokemon[i]]);
        if (listWounded.length === machine.storage) {
            return;
        }
        */
        //}
    }
}


function listPatients() {
    let lengthList = woundedPokemon.length < 15 ? woundedPokemon.length : 15;
    for (let i = 0; i < lengthList; i++) {
        createCardPatient(
            pokedex[woundedPokemon[i]].name,
            pokedex[woundedPokemon[i]].image,
            pokedex[woundedPokemon[i]].scream,
            pokedex[woundedPokemon[i]].maxPv
        );
    }
}
listPatients();

const btnMachineElmt = document.querySelector(".button-machine") as HTMLElement;

let button: boolean;

btnMachineElmt.addEventListener("click", () => {
    if (button) {
        btnMachineElmt.textContent = "Who is wounded ?";
        heal(listWounded);
        woundedPokemon = woundedPokemon.slice(6);
        listWounded = woundedPokemon.slice(0, machine.storage);
        cardPatients.innerHTML = "";
        cards.innerHTML = "";
        listPatients();
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