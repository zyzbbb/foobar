import {Expression,Evaluator} from '../src';

const exp = [
    '1+2',
    '1+2+3',
    '1+(3-2)*6',
    '1+(3-2)/6-8',
    '12+12',
    '100 +          100',
    '-100+100',
    '1+(0-5+3)*6',
    '1+(+5+3)*6',
    '1+($5+3)*6'
];

exp.forEach(e=>{
    try {
        const ep = Expression(e);
        const result = Evaluator(ep);
        console.log(`${e}=${result}`, result === eval(e));
    } catch (error:any) {
        console.error('%c%s','color:red',error.message);
    }
});