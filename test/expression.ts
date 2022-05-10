import {Expression,Evaluator} from '../src';

const exp = [
    '1+2',
    '1+2+3',
    '1-2',
    '1-2-3',
    '3-2-1',
    '2*2',
    '2*2*2',
    '2/2',
    '2/2/2',
    '2*2/2',
    '2/2*2',
    '1+(3-2)*6',
    '1+(3-2)/6-8',
    '12+12',
    '100 +          100',
    '-100+100',
    '1+(0-5+3)*6',
    '1+(+5+3)*6',
    '100+(300-200)*100-300*300/600',
    '1+($5+3)*6'
];

exp.forEach(e=>{
    try {
        const ep = Expression(e);
        const result = Evaluator(ep);
        const right = result === eval(e);
        console.log(`${e}=${result}`, right);
        if(!right){
            console.log(ep);
        }
    } catch (error:any) {
        console.error('%c%s','color:red',error.message);
    }
});