const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');
input = input.map((x) => x.trim('\r'));

N = Number(input[0]);
let P = input[1].split(' ');
P = P.map((x) => Number(x));

P.unshift(0)

let dp = new Array(N+1).fill(0);
dp[0] = 0;

for (let i=1; i<=N; i++) {
  for (let j=1; j<=i; j++) {
    dp[i] = Math.max(dp[i], dp[i-j] + P[j]);
  }
}

console.log(dp[N]);

/*
메모리: 9676 KB
시간: 188 ms
*/