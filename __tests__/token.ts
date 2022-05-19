import Scanner from '../src/scanner';

test('token',()=>{
    const codes = `
      var a=1;
   `;
    expect(new Scanner(codes).scan()).toBeInstanceOf(Array);
});