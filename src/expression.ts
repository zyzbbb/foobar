const TRUE = true;

export function Expression(exp:string){
    const symbols:string[] = [];
    let operant:string[] = [];
    let pointer = 0;
    let buffer = '';
    while(TRUE){
        const char = exp[pointer];
        pointer = pointer + 1;
        if(/[0-9]/.test(char)){
            buffer = buffer + char;
            continue;
        }else if(buffer !== '') {
            operant.push(buffer);
            buffer = '';
        }
        if(char === undefined){
            operant = operant.concat(symbols);
            break;
        }
        if(char === '+' || char === '-'){
            const top = symbols[0];
            if(top === '*' || top === '/'){
                while(TRUE){
                    const s = symbols.shift() as string;
                    if(s === '(' || s === undefined)break;
                    operant.push(s);
                }
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