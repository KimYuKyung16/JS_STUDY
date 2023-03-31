const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim();

let answer = 1;
for (let i=2; i<=input; i++) {
  answer *= i;
}

console.log(answer);

/*
메모리: 9588 KB
시간: 128 ms
*/