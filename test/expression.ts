import Scanner from '../src/scanner';

const codes = `
  var a=1;
  var b=2;
  var user_name="joghn sdkklo";
`;

const scanner = new Scanner(codes);

console.log(scanner.scan());