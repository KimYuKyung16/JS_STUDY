const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim();

let [ A, B, C ] = input.split(' ').map((x) => Number(x));

console.log((A+B)%C);
console.log(((A%C) + (B%C))%C);
console.log((A*B)%C);
console.log(((A%C) * (B%C))%C);

/*
메모리: 9596 KB
시간: 164 ms
*/