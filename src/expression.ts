import {TRUE,isOp} from './constant';

export function Expression(exp:string){
    const symbols:string[] = [];
    let operant:string[] = [];
    let pointer = 0;
    let buffer = '';
    while(TRUE){
        const char = exp[pointer];
        const prev = exp[pointer-1];
        pointer = pointer + 1;
        if(/\s/.test(char))continue;
        if(/[0-9]/.test(char)){
            buffer = buffer + char;
            continue;
        }else if(buffer !== ''){
            operant.push(buffer);
            buffer = '';
        }

        if(char === undefined){
            operant = operant.concat(symbols);
            break;
        }

        if(!isOp(char)){
            throw new Error(`Unexpected ${char}`);
        }

        if(!/[0-9]+/.test(prev)){
            // - negative symbol
            // + positive symbol
            if(char === '-' || char === '+'){
                operant.push('0');
            }
        }

        if(char === '+' || char === '-'){
            while(TRUE){
                const s = symbols.shift();
                if(s === undefined)break;
                if(s === '('){
                    symbols.unshift('(');
                    break;
                }
                operant.push(s);
            }
            symbols.unshift(char);
            continue;
        }
        if(char === '*' || char === '/'){
            symbols.unshift(char);
            continue;
        }
        if(char === '('){
            symbols.unshift('(');
            continue;
        }
        if(char === ')'){
            do{
                const s = symbols.shift() as string;
                if(s === '(')break;
                operant.push(s);
            }while(TRUE);
            continue;
        }
    }
    return operant;
}