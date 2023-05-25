const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');
input = input.map((x) => x.trim("\r")).map(Number);

let sum = input.reduce((acc, cur) => acc + cur, 0);
let flag = 0;

for (let i=0; i<input.length; i++) {
  for (let j=i+1; j<input.length; j++) {
    if (input[i] + input[j] === (sum-100)) {
      input.splice(input.indexOf(input[j]), 1);
      input.splice(input.indexOf(input[i]), 1);
      flag = 1;
    }
    if (flag) break;
  }
  if (flag) break;
}

console.log(input.sort((a,b) => a-b).join('\n'));

/*
메모리: 9320 KB
시간: 116 ms
*/