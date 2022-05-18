import * as symbols from './symbols';
import Token from './token';

export default class Scanner{
    private readonly sourceCode:string;
    private currentToken:Token;
    private tokens:Token[];
    private buffer:string;
    private row:number;
    private col:number;
    constructor(code:string){
       this.sourceCode = code;
       this.currentToken = new Token(symbols.IDENTIFIER_SYMBOL,0,0);
       this.tokens = [];
       this.buffer = '';
       this.row = 0;
       this.col = 0;
    }

    scan(){
        const source_code = this.sourceCode;
        for(let i=0;i<=source_code.length;i++){
            const char = source_code[i];
            if(char === undefined)break;

            if(char === '\n'){
                this.row = this.row + 1;
                this.col = 0;
                this.save();
                this.currentToken = new Token(symbols.NEW_LINE_SYMBOL,this.row,this.col);
                continue;
            }
            
            this.col = this.col + 1;

            if(char === '('){
                this.save();
                this.currentToken = new Token(symbols.PAREN_LEFT_SYMBOL,this.row,this.col);
                continue;
            }

            if(char === ')'){
                this.save();
                this.currentToken = new Token(symbols.PAREN_RIGHT_SYMBOL,this.row,this.col);
                continue;
            }

            if(char === '{'){
                this.save();
                this.currentToken = new Token(symbols.BRACE_LEFT_SYMBOL,this.row,this.col);
                continue;
            }

            if(char === '}'){
                this.save();
                this.currentToken = new Token(symbols.BRACE_RIGHT_SYMBOL,this.row,this.col);
                continue;
            }

            if(char === '+'){
                this.save();
                this.currentToken = new Token(symbols.PLUS_SYMBOL,this.row,this.col);
                continue;
            }

            if(char === '-'){
                this.save();
                this.currentToken = new Token(symbols.MINUS_SYMBOL,this.row,this.col);
                continue;
            }

            if(char === '*'){
                if(this.currentToken.symbol !== symbols.SLASH_SYMBOL){   
                    this.save();
                }
                this.currentToken = new Token(symbols.MUTIPLY_SYMBOL,this.row,this.col);
                continue;
            }

            if(char === '/'){
                if(this.currentToken.symbol !== symbols.MUTIPLY_SYMBOL){
                    this.save();
                }
                this.currentToken = new Token(symbols.SLASH_SYMBOL,this.row,this.col);
                continue;
            }

            if(char === ' '){
                this.save();
                continue;
            }

            this.save();

            if(this.currentToken.symbol !== symbols.IDENTIFIER_SYMBOL){
                this.currentToken = new Token(symbols.IDENTIFIER_SYMBOL,this.row,this.col);
            }

            this.currentToken.appendValue(char);
        }
    }

    private save(){
        this.tokens.push(this.currentToken);
       this.buffer = '';
    }
}