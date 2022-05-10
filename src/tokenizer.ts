import { DIVIDE, LBRACE, MINUS, PLUS, RBRACE, TIMES, UNKNOWN, VALUE } from './constant';


export function Tokenizer(str:string){

    switch(str){
    case '+':
        return token(PLUS,'',1);
    case '-':
        return token(MINUS,'',1);
    case '*':
        return token(TIMES,'',2);
        break;
    case '/':
        return token(DIVIDE,'',3);
    case '(':
        return token(LBRACE,'',0);
    case ')':
        return token(RBRACE,'',0);
    case undefined:
        return token(UNKNOWN,'',0);    
    default:
        return token(VALUE,str,0);            
    }

}

function token(symbol:string,value:string,priority:number){
    return {
        symbol,
        value,
        priority
    };
}