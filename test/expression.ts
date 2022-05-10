import {Expression,Evaluator} from '../src';

const exp = [
    '1+2',
    '1+2+3',
    '1+(3-2)*6',
    '1+(3-2)/6-8',
    '12+12'
];

exp.forEach(e=>{
    const result = Evaluator(Expression(e));
    console.log(`${e}=${result}`,result === eval(e));
});