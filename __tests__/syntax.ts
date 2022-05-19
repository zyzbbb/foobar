import Scanner from '../src/scanner';
import Syntax from '../src/syntax';

test('unexpected [',()=>{
    const codes = `
      var a=1;
      var b=[[[[[[[[[[1]]]]]]]]];
   `;
    const tokens = new Scanner(codes).scan();
    const syntax = new Syntax(tokens);
    expect(()=>syntax.check()).toThrow(SyntaxError);
});

test('unexpected ]',()=>{
    const codes = `
      var a=1;
      var b=[[[[[[[[[[2]]]]]]]]]]];
   `;
    const tokens = new Scanner(codes).scan();
    const syntax = new Syntax(tokens);
    expect(()=>syntax.check()).toThrow(SyntaxError);
});

test('unexpected (',()=>{
    const codes = `
      var a=1;
      var b=((((((((((1+2)))))))));
   `;
    const tokens = new Scanner(codes).scan();
    const syntax = new Syntax(tokens);
    expect(()=>syntax.check()).toThrow(SyntaxError);
});

test('unexpected )',()=>{
    const codes = `
      var a=1;
      var b=(((((((((((1+2))))))))))));
   `;
    const tokens = new Scanner(codes).scan();
    const syntax = new Syntax(tokens);
    expect(()=>syntax.check()).toThrow(SyntaxError);
});


test('unexpected {',()=>{
    const codes = `
      var a=1;
      var b={{{{{{}}}}};
   `;
    const tokens = new Scanner(codes).scan();
    const syntax = new Syntax(tokens);
    expect(()=>syntax.check()).toThrow(SyntaxError);
});

test('unexpected }',()=>{
    const codes = `
      var a=1;
      var b={{{{{{}}}}}}};
   `;
    const tokens = new Scanner(codes).scan();
    const syntax = new Syntax(tokens);
    expect(()=>syntax.check()).toThrow(SyntaxError);
});