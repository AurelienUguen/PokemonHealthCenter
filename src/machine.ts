import { Pokemon } from "./pokemon";

export class Machine
{
    constructor(private _storage: number){
        
    }
    
    public get storage(): number {
        return this._storage;
    }
    public set storage(value: number) {
        this._storage = value;
    }

    // regen = (pokemon:Pokemon) => {
    //     pokemon.pv = pokemon.maxPv;
    //     return pokemon.scream;

    // }    
    

}

const machine = new Machine (6);
console.log(machine);