import {BUILDIN, KEYWORDS} from './symbols';

export default class Token{
    private readonly _symbol:symbol;
    private _row:number;
    private _col:number;
    private _value:string;
    constructor(symbol:symbol,row:number,col:number,value=''){
        this._symbol = symbol;
        this._row = row;
        this._col = col;
        this._value = value;
    }

    get symbol():symbol{
        return this._symbol;
    }

    get row():number{
        return this._row;
    }

    get col():number{
        return this._col;
    }

    get value():string{
        return this._value;
    }

    isKeyword():boolean{
        return KEYWORDS.includes(this._value.trim());
    }

    isBuildInFunc():boolean{
        return BUILDIN.includes(this._value.trim());
    }

    appendValue(s:string){
        this._value = this._value + s;
        this._col = this._col + 1;
    }
}