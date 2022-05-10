import { 
    TDIVIDE, 
    TKEYWORD, 
    TLBRACE, 
    TMINUS, 
    TMULTIPLY, 
    TOPERATE, 
    TPLUS, 
    TRBRACE, 
    TUNKNOWN, 
    TVALUE,
    TokenValue, 
    TRUE,
    is_value,
    Token,
    is_operate,
    is_unknown
} from './constant';


export class Tokenizer{

    private readonly sourceCode:string;
    private index:number;

    constructor(sourceCode:string){
        this.sourceCode = sourceCode;
        this.index = 0;
    }

    valid(){
        return this.sourceCode[this.index] !== undefined;
    }

    next():Token{
        const sourceCode = this.sourceCode;
        let buffer = '';
        while(TRUE){
            const char = sourceCode[this.index];
            const nextChar = sourceCode[this.index+1];
            let token = this.token(char);
            const nextToken = this.token(nextChar);
            this.index++;
            if(is_value(token)){
                buffer = buffer + char;
                if(is_operate(nextToken) || is_unknown(nextToken)){
                    token = this.token(buffer);
                    buffer = '';    
                } else {
                    continue;
                }
            }
            return token;
        }
        return this.token(undefined); 
    }

    prev(){
        return this.token(this.sourceCode[this.index - 2]);
    }

    token(str:string|undefined){
        switch(str){
        case '+':
            return token(TOPERATE,TPLUS,1);
        case '-':
            return token(TOPERATE,TMINUS,1);
        case '*':
            return token(TOPERATE,TMULTIPLY,2);
        case '/':
            return token(TOPERATE,TDIVIDE,3);
        case '(':
            return token(TOPERATE,TLBRACE,0);
        case ')':
            return token(TOPERATE,TRBRACE,0);
        case undefined:
            return token(TKEYWORD,TUNKNOWN,0);    
        default:
            return token(TVALUE,str,0);            
        }
    }
    

}

function token(symbol:number,value:TokenValue,priority:number){
    return {
        symbol,
        value,
        priority
    };
}