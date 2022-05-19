import Scannr from './src/scanner';
import Syntax from './src/syntax';

const codes = `
   var a=1;
   var b=2;
   function sum(a,b){
      return a+1;
   }
`;

const tokens = new Scannr(codes).scan();
console.log(tokens);