import Evaluator from './src/evaluator';
import Scanner from './src/scanner';
import Syntax from './src/syntax';

const codes = `
var a=1;
var b=2;
var c="this is a string";
function sum(a,b){
    return a+b;
}
var aaa = sum(1,sum(2,3));
`;

const tokens = new Scanner(codes).scan();
new Syntax(tokens).check();

new Evaluator(tokens).run();
