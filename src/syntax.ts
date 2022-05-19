import Token from './token';
import * as symbols from './symbols';

export default class Syntax{
    private readonly tokens:Token[];
    constructor(tokens:Token[]){
       this.tokens = tokens;
    }

    check(){
        let parens = [];
        let braces = [];
        let buckets = [];
        for(let i=0;i<this.tokens.length;i++){
           const token = this.tokens[i];
           if(token.symbol === symbols.SPACE_SYMBOL)continue;
           if(token.symbol === symbols.PAREN_LEFT_SYMBOL){
               parens.push(token);
               continue;
           }
           if(token.symbol === symbols.PAREN_RIGHT_SYMBOL){
               if(parens.length === 0){
                   this.syntax_err(`unexpected )`,token);
               }
               parens.pop();
               continue;
           }
           if(token.symbol === symbols.BRACE_LEFT_SYMBOL){
              braces.push(token);
              continue;
           }
           if(token.symbol === symbols.BRACE_RIGHT_SYMBOL){
               if(braces.length === 0){
                   this.syntax_err(`unexpected }`,token);
               }
               braces.pop();
               continue;
           }
           if(token.symbol === symbols.BUCKET_LEFT_SYMBOL){
               buckets.push(token);
               continue;
           }
           if(token.symbol === symbols.BUCKET_RIGHT_SYMBOL){
               if(buckets.length === 0){
                   this.syntax_err(`unexpected ]`,token);
               }
               buckets.pop();
               continue;
           }
        }
    }

    syntax_err(err:string,token:Token){
        throw new SyntaxError(`${err} at line:${token.row} col:${token.col}`);
    }
}