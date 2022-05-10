export type TokenValue = string|number;

export interface Token{
    symbol:number
    value:TokenValue
    priority:number
}


export const TRUE = true;


export const TVALUE = 100;
export const TOPERATE = 110;
export const TKEYWORD = 120;

export const TPLUS = 501;
export const TMINUS = 502;
export const TMULTIPLY = 503;
export const TDIVIDE = 504;
export const TLPAREN = 505;
export const TRPAREN = 506;
export const TLBRACE = 507;
export const TRBRACE = 508;
export const TLBRACKET = 509;
export const TRBRACKET = 510;
export const TUNKNOWN = 511;

export function eval_err(err:string){
    throw new Error(err);
}

export function is_operate(token:Token){
    return token.symbol === TOPERATE;
}

export function is_unknown(token:Token){
    return token.value === TUNKNOWN;
}

export function is_value(token:Token){
    return token.symbol === TVALUE;
}

export function isStr(value:string){
    return /^("|')(.*?)\1$/.test(value as string);
}

export function convert_number(value:string):number{
    const num =  Number(value);
    if(isStr(value) || isNaN(num)){
        eval_err(`Unexpected value:${value}`);
    }

    return num;
}