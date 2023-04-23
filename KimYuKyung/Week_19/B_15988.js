const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');
input = input.map((x) => Number(x.trim('\r')));

let answer = [];
let dp = new Array(1000001).fill(0);

dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i=4; i<dp.length; i++) {
  dp[i] = (dp[i-1] % 1000000009) + (dp[i-2] % 1000000009) + (dp[i-3] % 1000000009);
}

for (let i=1; i<input.length; i++) {
  answer.push(dp[input[i]] % 1000000009);
}

console.log(answer.join('\n'));

/*
메모리: 26776 KB
시간: 224 ms
*/