export interface Token{
    symbol:string
    value:string
    priority:number
}


export const TRUE = true;

export const VALUE = 'value';
export const PLUS = 'plus';
export const MINUS = 'minus';
export const TIMES = 'times';
export const DIVIDE = 'divide';
export const LPAREN = 'lparen';
export const RPAREN = 'rparen';
export const LBRACE = 'lbrace';
export const RBRACE = 'rbrace';
export const LBRACKET = 'lbracket';
export const RBRACKET = 'rbracket';

export const UNKNOWN = 'unknown';


export function isOp(token:Token){
    return token.symbol !== VALUE;
}

export function isStr(value:unknown){
    return /^("|')(.*?)\1$/.test(value as string);
}

export function convert(op:any):any{
    if(isStr(op)){
        return String(op.substring(1,op.length-1));
    }
    if(isNaN(op)){
        return '';
    }
    return Number(op);
}