import Token from './token';
import * as symbols from './symbols';

export default class Syntax{
    private readonly tokens:Token[];
    constructor(tokens:Token[]){
        this.tokens = tokens;
    }

    check(){
        const parens = [];
        const braces = [];
        const buckets = [];
        for(let i=0;i<this.tokens.length;i++){
            const token = this.tokens[i];
            if(token.symbol === symbols.SPACE_SYMBOL)continue;
            if(token.symbol === symbols.PAREN_LEFT_SYMBOL){
                parens.push(token);
                continue;
            }
            if(token.symbol === symbols.PAREN_RIGHT_SYMBOL){
                if(parens.length === 0){
                    this.syntaxError('unexpected token )',token);
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
                    this.syntaxError('unexpected token }',token);
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
                    this.syntaxError('unexpected token ]',token);
                }
                buckets.pop();
                continue;
            }
            if(token.symbol === symbols.IDENTIFIER_SYMBOL){
                this.checkIdentifier(token,i);
            }
        }

        if(parens.length !== 0){
            this.syntaxError('unexpected token (',parens[0]);
        }

        if(braces.length !== 0){
            this.syntaxError('unexpected token {',braces[0]);
        }

        if(buckets.length !== 0){
            this.syntaxError('unexpected token [',buckets[0]);
        }

    }

    private checkIdentifier(token:Token,index:number){

        const next = this.next(index);
        const prev = this.previous(index);
        if(token.value === 'function'){
            if(next.symbol !== symbols.IDENTIFIER_SYMBOL){
                this.syntaxError(`unexpected ${next.value}`,next);
            }
            if(next.symbol === symbols.IDENTIFIER_SYMBOL){
                if(next.isKeyword()){
                    this.syntaxError(`unexpected ${next.value}`,next);
                }
                return;
            }
            this.syntaxError(`unexpected ${next.value}`,next);
        }

        if(!token.isKeyword() && next.isKeyword()){
            this.syntaxError(`unexpected ${next.value}`,next);
        }
    }

    private next(index:number){
        let i = index + 1;
        let token = this.tokens[i];
        for(;i<this.tokens.length;i++){
            if(token.symbol !== symbols.SPACE_SYMBOL)break;
            token = this.tokens[i];
        }
        return token;
    }

    private previous(index:number){
        let i = index - 1;
        let token = this.tokens[i];
        for(;i>=0;i--){
            if(token.symbol !== symbols.SPACE_SYMBOL)break;
            token = this.tokens[i];
        }
        return token;
    }

    private syntaxError(err:string,token:Token){
        throw new SyntaxError(`${err} at line:${token.row} col:${token.col}`);
    }
}