import Token from './token';
import * as symbols from './symbols';
import { print } from './function';

export default class Evaluator{
    private readonly tokens:Token[];
    private cursor:number;
    private maxCursor:number;
    constructor(tokens:Token[]){
        this.tokens = tokens;
        this.cursor = 0;
        this.maxCursor = this.tokens.length;
    }

    run(){
        while(this.cursor < this.maxCursor){
            const token = this.tokens[this.cursor];
            if(token === undefined)break;
            if(token.symbol === symbols.SPACE_SYMBOL){
                this.cursor++;
                continue;
            }
            if(token.symbol === symbols.IDENTIFIER_SYMBOL){
                this.call(token);
            }
            this.cursor++;
        }
    }

    private call(token:Token){
        if(token.isKeyword())return;
        this.cursor++;
        const stack = [];
        while(this.cursor < this.maxCursor){
            const next = this.tokens[this.cursor];
            if(
                next.symbol === symbols.SPACE_SYMBOL
            ){
                this.cursor++;
                continue;
            }
            if(next.symbol === symbols.SIMCOLON_SYMBOL){
                if(stack.length === 0)return;
                if(stack[0].symbol !== symbols.PAREN_RIGHT_SYMBOL){
                    return;
                } else {
                    break;
                }
            }

            if(stack.length === 0 && next.symbol !== symbols.PAREN_LEFT_SYMBOL)return;
         
            stack.unshift(next);
            this.cursor++;
        }
        stack.pop();
        stack.shift();
    }
}