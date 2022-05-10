export const TRUE = true;


export function isOp(char:string){
    return char === '+' 
    || char === '-'
    || char === '*'
    || char === '/'
    || char === '('
    || char === ')';
}