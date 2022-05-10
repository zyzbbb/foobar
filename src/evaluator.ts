import {TRUE,isOp, Token, PLUS, MINUS, TIMES, DIVIDE, isStr, convert} from './constant';

export function Evaluator(tokens:Token[]){
    const result = [];
    let i=0;
    while(TRUE){
        const token = tokens[i];
        i = i + 1;
        if(token === undefined)break;
        if(isOp(token)){
            let op1 = result.shift() as any;
            let op2 = result.shift() as any;
            op1 = convert(op1);
            op2 = convert(op2);
            switch(token.symbol){
            case PLUS:
                result.unshift(op2+op1);
                break;
            case MINUS:
                result.unshift(op2-op1);
                break;
            case TIMES:
                result.unshift(op2*op1);
                break;
            case DIVIDE:
                result.unshift(op2/op1);
                break;
            }
            continue;
        } else {
            result.unshift(token.value);
        }
    }
    return result.shift();
}