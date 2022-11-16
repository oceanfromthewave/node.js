/* node.js/coding-test/10869.js */
const fs = require('fs');
let [a, b] = fs.readFileSync('./input.txt').toString().split('\n');
a = parseInt(a);
b = parseInt(b);
// A+B 출력
console.log( a + b );
// A-B 츨력
console.log( a - b );
// A*B 출력
console.log( a * b );
// A/B(몫) 출력
console.log(Math.floor(a,b));
// A%B(나머지) 출력
console.log( a % b );
