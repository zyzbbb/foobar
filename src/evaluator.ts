import {TRUE,isOp} from './constant';

export function Evaluator(operant:string[]){
    const result = [];
    let i=0;
    while(TRUE){
        const op = operant[i];
        i = i + 1;
        if(op === undefined)break;
        if(isOp(op)){
            let op1 = result.shift() as number;
            let op2 = result.shift() as number;
            op1 = Number(op1);
            op2 = Number(op2);
            if(op === '+'){
                result.unshift(op2+op1);
                continue;
            }
            if(op === '-'){
                result.unshift(op2-op1);
                continue;
            }
            if(op === '*'){
                result.unshift(op2*op1);
                continue;
            }
            if(op === '/'){
                result.unshift(op2/op1);
                continue;
            }
        } else {
            result.unshift(op);
        }
    }
    return result.shift();
}