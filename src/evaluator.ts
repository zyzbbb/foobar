import {TRUE, Token, TPLUS, TMINUS, TMULTIPLY, TDIVIDE, convert_number, is_operate} from './constant';

export function Evaluator(tokens:Token[]){
    const result = [];
    let i=0;
    while(TRUE){
        const token = tokens[i];
        i = i + 1;
        if(token === undefined)break;
        if(is_operate(token)){
            switch(Number(token.value)){
            case TPLUS:
            {
                const right = convert_number(<string>result.shift());
                const left = convert_number(<string>result.shift());
                result.unshift(left+right);
                break;
            }
            case TMINUS:
            {
                const right = convert_number(<string>result.shift());
                const left = convert_number(<string>result.shift());
                result.unshift(left-right);
                break;
            }
            case TMULTIPLY:
            {
                const right = convert_number(<string>result.shift());
                const left = convert_number(<string>result.shift());
                result.unshift(left*right);
                break;
            }
            case TDIVIDE:
            {
                const right = convert_number(<string>result.shift());
                const left = convert_number(<string>result.shift());
                result.unshift(left/right);
                break;
            }
            }
            continue;
        } else {
            result.unshift(token.value);
        }
    }
    return result.shift();
}