export class Pokemon {
    private _pv: number;
    public _healthContainer?: HTMLElement
    public _screamContainer?: HTMLElement

    constructor(
        private _name: string,
        private _scream: string,
        private _image: string,
        private _maxPv: number,
    ) {
        this._pv = _maxPv;
        this._maxPv = _maxPv;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get scream(): string {
        return this._scream;
    }
    public set scream(value: string) {
        this._scream = value;
    }

    public get pv(): number {
        return this._pv;
    }

    public set pv(value: number) {
        this._pv = value;
    }

    public get image(): string {
        return this._image;
    }

    public set image(value: string) {
        this._image = value;
    }

    public get maxPv(): number {
        return this._maxPv;
    }

    wound = (attackPv: number) => {
        this.pv -= attackPv;
        if(this.pv < 0){
            this.pv = 0;
        }
        return (attackPv + ' Ouch! (' + this.pv + ')');
    }
}