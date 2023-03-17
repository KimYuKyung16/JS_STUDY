const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim();
let answer = [];

for (let i='a'.charCodeAt(); i<='z'.charCodeAt(); i++) {
  if (input.includes(String.fromCharCode(i))) { // i값을 다시 소문자로 바꾼 후 비교
    answer.push(input.indexOf(String.fromCharCode(i))); // 포함되어 있으면 index push
  } else answer.push(-1); 
}

console.log(answer.join(' '));

/*
메모리: 9332 KB
시간: 136 ms
*/