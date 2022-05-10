import {TRUE,isOp, Token, LBRACE, PLUS, MINUS, TIMES, DIVIDE, RBRACE} from './constant';
import { Tokenizer } from './tokenizer';

export function Expression(exp:string){
    const symbols:Token[] = [];
    let operant:Token[] = [];
    let pointer = 0;
    let buffer = '';
    while(TRUE){
        const char = exp[pointer];
        const prev = exp[pointer-1];
        pointer = pointer + 1;
        if(/\s/.test(char))continue;
        const token = Tokenizer(char);
        if(!isOp(token)){
            buffer = buffer + char;
            continue;
        }else if(buffer !== ''){
            operant.push(Tokenizer(buffer));
            buffer = '';
        }

        if(char === undefined)break;

        if(isOp(Tokenizer(prev))){
            // - negative symbol
            // + positive symbol
            if(token.symbol === MINUS || token.symbol === PLUS){
                operant.push(Tokenizer('0'));
            }
        }

        if(token.symbol === PLUS || token.symbol === MINUS){
            while(TRUE){
                if(symbols.length === 0)break;
                if(symbols[0].symbol === LBRACE)break;
                const s = symbols.shift() as Token;
                operant.push(s);
            }
            symbols.unshift(token);
            continue;
        }
        if(token.symbol === TIMES || token.symbol === DIVIDE){
            if(symbols.length){
                if(symbols[0].priority >= token.priority){
                    const s = symbols.shift() as Token;
                    operant.push(s);
                }
            }
            symbols.unshift(token);
            continue;
        }
        if(token.symbol === LBRACE){
            symbols.unshift(token);
            continue;
        }
        if(token.symbol === RBRACE){
            while(TRUE){
                const s = symbols.shift() as Token;
                if(s.symbol === LBRACE)break;
                operant.push(s);
            }
            continue;
        }
    }

    operant = operant.concat(symbols);

    return operant;
}