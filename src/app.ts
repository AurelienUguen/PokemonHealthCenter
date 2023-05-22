import { Machine } from "./machine.js";
import { Pokemon } from "./pokemon.js";

// Instance de la Machine a soigné les Pokeymaunes //
const machine = new Machine(6);

// List de nos instances de Pokeymaunes //
const pokedex: { [key: string]: Pokemon } = {
    pikachu: new Pokemon("Pikachu","Pikaaaachhuuuu","https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",150),
    salameche: new Pokemon("Salameche","Salaaameche","https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",200),
    carapuce: new Pokemon("Carapuce","Carapuuuce","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",90),
    evoli: new Pokemon("Evoli","Evoliii","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/133.png",110),
    canartichau: new Pokemon("Canarticho","Canartichoooo","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/083.png",300),
    psykokwak: new Pokemon("Psykokwak","Psykokwaaak","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/054.png",100),
    ptitard: new Pokemon("Ptitard","Ptitaaaard","https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png",100),
    morpeko: new Pokemon("Morpeko","Ptitaaaard","https://assets.pokemon.com/assets/cms2/img/pokedex/full/877.png",100),
    dedenne: new Pokemon("Dedenne","Ptitaaaard","https://assets.pokemon.com/assets/cms2/img/pokedex/full/702.png",100),
    pashmilla: new Pokemon("Pashmilla","Ptitaaaard","https://assets.pokemon.com/assets/cms2/img/pokedex/full/573.png",100),
    cochignon: new Pokemon("Cochignon","Ptitaaaard","https://assets.pokemon.com/assets/cms2/img/pokedex/full/221.png",100),
    grainipiot: new Pokemon("Grainipiot","Ptitaaaard","https://assets.pokemon.com/assets/cms2/img/pokedex/full/273.png",100),
    galegon: new Pokemon("Galegon","Ptitaaaard","https://assets.pokemon.com/assets/cms2/img/pokedex/full/305.png",100 ),
    chochodile: new Pokemon("Chochodile","Ptitaaaard","https://assets.pokemon.com/assets/cms2/img/pokedex/full/909.png",250),
    croquine: new Pokemon("Croquine","Ptitaaaard","https://assets.pokemon.com/assets/cms2/img/pokedex/full/761.png",100),
    larvibule: new Pokemon("Larvibule","Ptitaaaard","https://assets.pokemon.com/assets/cms2/img/pokedex/full/736.png",100),
    skelénox: new Pokemon("Skelénox","Ptitaaaard","https://assets.pokemon.com/assets/cms2/img/pokedex/full/355.png",100),
    scrutella: new Pokemon("Scrutella","Ptitaaaard","https://assets.pokemon.com/assets/cms2/img/pokedex/full/574.png",120),
    tortipouss: new Pokemon("Tortipouss","Ptitaaaard","https://assets.pokemon.com/assets/cms2/img/pokedex/full/387.png",100),
    roudoudou: new Pokemon("Roudoudou","Ptitaaaard","https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png",100),
    bulbizarre: new Pokemon("Bulbizarre","Bulbiiii","https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",105),
    melofee: new Pokemon("Mélofée","Mélooooofée","https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png",150),
    goupix: new Pokemon("Goupix","Goupiiiix","https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png",200),
    caninos: new Pokemon("Caninos","Caniiiinos","https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png",100),
    racaillou: new Pokemon("Racaillou","Racaillouuuu","https://assets.pokemon.com/assets/cms2/img/pokedex/full/074.png",100),
    ponyta: new Pokemon("Ponyta","Popoponyta","https://assets.pokemon.com/assets/cms2/img/pokedex/full/077.png",190),
    otaria: new Pokemon("Otaria","Otariiia","https://assets.pokemon.com/assets/cms2/img/pokedex/full/086.png",140),
    tadmorv: new Pokemon("Tadmorv","Tadmoooooorv","https://assets.pokemon.com/assets/cms2/img/pokedex/full/088.png",260),
    onix: new Pokemon("Onix","Oniiiiix","https://assets.pokemon.com/assets/cms2/img/pokedex/full/095.png",100),
    lipoutou: new Pokemon("Lipoutou","Lipoutoupoutou","https://assets.pokemon.com/assets/cms2/img/pokedex/full/124.png",100)
}
​
pokedex.pikachu.wound(200);
pokedex.canartichau.wound(10);
pokedex.psykokwak.wound(23);
pokedex.carapuce.wound(74);
pokedex.ptitard.wound(34);
pokedex.evoli.wound(17);
pokedex.salameche.wound(133);
pokedex.morpeko.wound(200);
pokedex.dedenne.wound(10);
pokedex.pashmilla.wound(23);
pokedex.cochignon.wound(74);
pokedex.grainipiot.wound(34);
pokedex.galegon.wound(17);
pokedex.chochodile.wound(133);
pokedex.croquine.wound(200);
pokedex.larvibule.wound(10);
pokedex.skelénox.wound(23);
pokedex.scrutella.wound(74);
pokedex.tortipouss.wound(34);
pokedex.roudoudou.wound(17);
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
let emergencyList: string[] = [];

// Fonction de remplissage de la liste de Pokeymaunes bléssés ou hors jeux //
function isWounded() {
    Object.keys(pokedex).forEach(function (pokemon) {
        if (pokedex[pokemon].pv < pokedex[pokemon].maxPv) {
            if (!woundedPokemon.includes(pokemon)) {
                woundedPokemon.push(pokemon);
                emergencyList.push(pokemon);
            }
        }
    });
}
isWounded();
//waitingList();
//console.log (emergencyList);
//console.log (woundedPokemon);

let isWaiting: Pokemon[] = [];
//console.log(isWaiting);
function waitingList(){
    for (let i = 0; i < emergencyList.length; i++) {
        if (!isWaiting.includes(pokedex[emergencyList[i]])) {
            createWaitingListCard(pokedex[emergencyList[i]]);
            isWaiting.push(pokedex[emergencyList[i]]);
        }
    }
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
    
    const cardScreamContainer = document.createElement("div");
    cardScreamContainer.classList.add("screamCont");
    cardBody.appendChild(cardScreamContainer);

    pokemon._screamContainer = document.createElement("div");
    pokemon._screamContainer.classList.add("scream");
    cardScreamContainer.appendChild(pokemon._screamContainer);
    // pokemon._screamContainer.innerHTML= pokemon.scream;

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

const backgroundPatientsElt = document.querySelector(".backgroundPatients")! as HTMLElement;
const cardPatients = document.querySelector(".cardPatients")!;
backgroundPatientsElt.style.height = "600px";

function createWaitingListCard(
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

// les fonctions des boutons //

const btnMachineElmt = document.querySelector(".button-machine") as HTMLElement;
const music = new Audio('./assets/PokeCenter2.mp3');
let button: boolean;

btnMachineElmt.addEventListener("click", () => {
    
    if (button) {
        heal(listWounded);
        woundedPokemon = [];
        listWounded = [];
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
        

        for (let i = 0; i < listWounded.length; i++) {
            const pokeScream = listWounded[i];
            setTimeout(() => {
                if (pokeScream._screamContainer) {
                    pokeScream._screamContainer.innerHTML = `${pokeScream.scream}`;
                }
            }, 2000);
        }

        setTimeout(() => {btnMachineElmt.removeAttribute('disabled')}, 3000);
        music.play();
        button = false;
        console.log("isWounded() = ");console.log(woundedPokemon);
        console.log("listWoundedPokemon = ");console.log(listWounded);
    } else {
        btnMachineElmt.textContent = "Heal them all !";
        cards.innerHTML = "";
        isWounded();
        listWoundedPokemon();
        console.log("isWounded() = ");console.log(woundedPokemon);
        console.log("listWoundedPokemon = ");console.log(listWounded);
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