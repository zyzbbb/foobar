import {Expression,Evaluator} from '../src';
import { Tokenizer } from '../src/tokenizer';

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
    '1234567+3453456',
    '-45678+45677'
];

exp.forEach(e=>{
    const ep = Expression(new Tokenizer(e));
    try {
        const result = Evaluator(ep);
        const right = result === eval(e);
        console.log(`${e}=${result}`, right);
        if(!right)throw new Error('not equal');
    } catch (error:any) {
        console.error('%c%s,%s','color:red',error.message,e);
        console.log(ep);
    }
});