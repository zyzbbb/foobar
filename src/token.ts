export default class Token{
    private readonly _symbol:symbol;
    private readonly _row:number;
    private readonly _col:number;
    private _value:string;
    constructor(symbol:symbol,row:number,col:number,value?:string){
       this._symbol = symbol;
       this._row = row;
       this._col = col;
       this._value = value;
    }

    get symbol():symbol{
        return this.symbol;
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

    appendValue(s:string){
       this._value = this._value + s;
    }
}