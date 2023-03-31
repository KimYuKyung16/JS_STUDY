// 너무 큰 수가 들어올 때는 infinity 뜸.

const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim();

let answer = 0;

for (let i=1; i<=input; i++) {
  if (i%125 === 0) answer += 3; // 5의 3제곱 2*5=10, 2*5=10, 2*5=10 ... 10이 3개 = 0이 3개
  else if (i%25 === 0) answer += 2; // 5의 제곱 2*5=10, 2*5=10 ... 10이 2개 = 0이 2개
  else if (i%5 === 0) answer += 1; // 5 2*5=10, ... 10이 1개 = 0이 1개
  else continue;
}

console.log(answer)


/*
메모리: 9344 KB
시간: 128 ms
*/