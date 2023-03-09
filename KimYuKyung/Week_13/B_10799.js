const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim();

let stack = [];
let answer = 0;
let last;

for (let i=0; i<input.length; i++) {
  if (input[i] === '(') {
    stack.push('(')
    last = '(';
  } else {
    if (last === ')') {
      answer ++;
      stack.pop();
    } else {
      stack.pop();
      answer += stack.length;
      last = ')';
    }
  }
}

console.log(answer);

/*
메모리: 11320 KB
시간: 228 ms
*/