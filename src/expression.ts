import {TRUE, Token, TMINUS, TPLUS, TLBRACE, TMULTIPLY, TDIVIDE, TRBRACE, is_operate, is_unknown} from './constant';
import { Tokenizer } from './tokenizer';

export function Expression(tokenizer:Tokenizer){
    const symbols:Token[] = [];
    let operant:Token[] = [];
    while(tokenizer.valid()){

        const token = tokenizer.next(); 

        if(is_operate(token)){
            // - negative symbol
            // + positive symbol
            if(
                (token.value === TMINUS || token.value === TPLUS)
                && (is_operate(tokenizer.prev()) || is_unknown(tokenizer.prev()))
            ){
                operant.push(tokenizer.token('0'));
            }
        }

        if(token.value === TPLUS || token.value === TMINUS){
            while(TRUE){
                if(symbols.length === 0)break;
                if(symbols[0].value === TLBRACE)break;
                const s = symbols.shift() as Token;
                operant.push(s);
            }
            symbols.unshift(token);
            continue;
        }

        if(token.value === TMULTIPLY || token.value === TDIVIDE){
            if(symbols.length){
                if(symbols[0].priority >= token.priority){
                    const s = symbols.shift() as Token;
                    operant.push(s);
                }
            }
            symbols.unshift(token);
            continue;
        }

        if(token.value === TLBRACE){
            symbols.unshift(token);
            continue;
        }

        if(token.value === TRBRACE){
            while(TRUE){
                const s = symbols.shift() as Token;
                if(s.value === TLBRACE)break;
                operant.push(s);
            }
            continue;
        }

        operant.push(token);
    }

    operant = operant.concat(symbols);

    return operant;
}