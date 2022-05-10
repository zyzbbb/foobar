
export function Evaluator(operant:string[]){
    const result = [];
    for(let i=0;i<operant.length;i++){
        if(isOp(operant[i])){
            const op1 = result.shift() as string;
            const op2 = result.shift() as string;
            if(operant[i] === '+'){
                result.push(Number(op2) + Number(op1));
                continue;
            }
            if(operant[i] === '-'){
                result.push(Number(op2) - Number(op1));
                continue;
            }
            if(operant[i] === '*'){
                result.push(Number(op2) * Number(op1));
                continue;
            }
            if(operant[i] === '/'){
                result.push(Number(op2) / Number(op1));
                continue;
            }
        } else {
            result.unshift(operant[i]);
        }
    }
    return result.shift();
}

function isOp(char:string){
    return char === '+' || char === '-' || char === '*' || char === '/';
}