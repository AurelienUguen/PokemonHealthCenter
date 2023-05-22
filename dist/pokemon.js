export class Pokemon {
    constructor(_name, _scream, _image, _maxPv) {
        this._name = _name;
        this._scream = _scream;
        this._image = _image;
        this._maxPv = _maxPv;
        this.wound = (attackPv) => {
            this.pv -= attackPv;
            if (this.pv < 0) {
                this.pv = 0;
            }
            return (attackPv + ' Ouch! (' + this.pv + ')');
        };
        this._pv = _maxPv;
        this._maxPv = _maxPv;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get scream() {
        return this._scream;
    }
    set scream(value) {
        this._scream = value;
    }
    get pv() {
        return this._pv;
    }
    set pv(value) {
        this._pv = value;
    }
    get image() {
        return this._image;
    }
    set image(value) {
        this._image = value;
    }
    get maxPv() {
        return this._maxPv;
    }
}
//# sourceMappingURL=pokemon.js.map