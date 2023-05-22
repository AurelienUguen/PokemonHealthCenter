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
    bulbizarre: new Pokemon(
        "Bulbizarre",
        "Bulbiiii",
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
        105
    ),
    melofee: new Pokemon(
        "Mélofée",
        "Mélooooofée",
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png",
        150
    ),
    goupix: new Pokemon(
        "Goupix",
        "Goupiiiix",
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png",
        200
    ),
    caninos: new Pokemon(
        "Caninos",
        "Caniiiinos",
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png",
        100
    ),
    racaillou: new Pokemon(
        "Racaillou",
        "Racaillouuuu",
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/074.png",
        100
    ),
    ponyta: new Pokemon(
        "Ponyta",
        "Popoponyta",
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/077.png",
        190
    ),
    otaria: new Pokemon(
        "Otaria",
        "Otariiia",
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/086.png",
        140
    ),
    tadmorv: new Pokemon(
        "Tadmorv",
        "Tadmoooooorv",
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/088.png",
        260
    ),
    onix: new Pokemon(
        "Onix",
        "Oniiiiix",
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/095.png",
        100
    ),
    lipoutou: new Pokemon(
        "Lipoutou",
        "Lipoutoupoutou",
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/124.png",
        100
    ),
}

pokedex.pikachu.wound(200);
pokedex.canartichau.wound(10);
pokedex.psykokwak.wound(23);
pokedex.salameche.wound(133);
pokedex.carapuce.wound(74);
pokedex.evoli.wound(17);
pokedex.ptitard.wound(34);


pokedex.bulbizarre.wound(34);
pokedex.melofee.wound(37);
pokedex.goupix.wound(74);
pokedex.caninos.wound(64);
pokedex.racaillou.wound(34);
pokedex.ponyta.wound(60);
pokedex.otaria.wound(14);
pokedex.tadmorv.wound(3);
pokedex.onix.wound(100);
pokedex.lipoutou.wound(355);


 
// Variable qui accumule les Pokeymaunes bléssés ou hors jeux //
let woundedPokemon: string[] = [];
isWounded();
let patientsList = woundedPokemon;


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
const backgroundPatientsElt = document.querySelector(".backgroundPatients")! as HTMLElement;
const backgroundElt = document.querySelector(".background")! as HTMLElement;
const cards = document.querySelector(".cards")!;
const cardPatients = document.querySelector(".cardPatients")!;

backgroundElt.style.width = "1000px";
backgroundElt.style.height = "600px";
// backgroundPatientsElt.style.height = "600px";


function calcHealthPerc(pv: number, maxPv: number) {
    let currentLife = (pv / maxPv) * 100;
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
    pokemon._healthContainer.style.width = calcHealthPerc(pokemon.pv, pokemon.maxPv);

    cardImg.style.width = "100px";
    cardImg.style.height = "100px";
}

function createPatientCard(
    pokemon: Pokemon
) {
    const card = document.createElement("div");
    card.classList.add("card", "m-1");
    cardPatients?.appendChild(card);

    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    card.appendChild(cardHeader);

    const cardImg = document.createElement("div");
    cardImg.style.backgroundImage = `url(${pokemon.image})`;
    cardImg.classList.add("card-img");
    card.appendChild(cardImg);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body", "m-0", "p-0");
    card.appendChild(cardBody);

    const cardTitle = document.createElement("p");
    cardTitle.innerHTML = `${pokemon.name}`;
    cardTitle.classList.add("card-title");
    cardBody.appendChild(cardTitle);

    cardImg.style.width = "50px";
    cardImg.style.height = "50px";
}

function listPatients() {
    let lengthList = patientsList.length < 15 ? patientsList.length : 15;
    for (let i = 0; i < lengthList; i++) {
        createPatientCard(pokedex[patientsList[i]]);
    }
}
listPatients();


let listWounded: Pokemon[] = [];

function listWoundedPokemon() {
        for (let i = 0; i < 6; i++) {
            if (!listWounded.includes(pokedex[woundedPokemon[i]])) {
                createPokemonCard(
                    pokedex[woundedPokemon[i]]
                );
                listWounded.push(pokedex[woundedPokemon[i]]);
                /*if (listWounded.length === machine.storage) {
                    return;
                }*/
            }
        }
    }

// les fonctions des boutons //
const btnMachineElmt = document.querySelector(".button-machine") as HTMLElement;

let button: boolean;

const music = new Audio('./assets/PokeCenter2.mp3');

btnMachineElmt.addEventListener("click", () => {

    console.log('pat'+patientsList);
    console.log(woundedPokemon);

    if (button) {
        btnMachineElmt.textContent = "Who is wounded ?";
        heal(listWounded);
/*
        for (let i = 0; i < listWounded.length; i++) {
        
            setTimeout(() => {
                const pokemon = listWounded[i];
                if (!pokemon._healthContainer) return;
                pokemon._healthContainer.style.width = '100%';
            });
        };
        setTimeout(() => {cards.innerHTML = ""}, 3000);
        music.play();
*/
cards.innerHTML = "";
        button = false;
    } else {
        isWounded();

        cardPatients.innerHTML = "";
        listPatients();
        patientsList = patientsList.slice(6);

        btnMachineElmt.textContent = "Heal them all !";
        cards.innerHTML = "";
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