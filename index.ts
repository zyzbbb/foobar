import Scanner from './src/scanner';
import Syntax from './src/syntax';

const codes = `
var a=1;
var b=2;
function sum(a,b){
    return a+b;
}
function sum(a,b){
    a+b;return
}
sum(1,2);
`;

const tokens = new Scanner(codes).scan();
new Syntax(tokens).check();