export class Identifer{
    private _value:string;

    constructor(v:string){
        this._value = v;
    }

    appendValue(v:string){
        this._value += v;
    }

    isEmpty(){
        return this._value === '';
    }

    get value():string{
        return this._value;
    }
}