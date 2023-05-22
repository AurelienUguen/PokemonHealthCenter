export class Machine {
    constructor(_storage) {
        this._storage = _storage;
        this.regen = (pokemon) => {
            pokemon.pv = pokemon.maxPv;
            return pokemon.scream;
        };
    }
    get storage() {
        return this._storage;
    }
    set storage(value) {
        this._storage = value;
    }
}
//# sourceMappingURL=machine.js.map