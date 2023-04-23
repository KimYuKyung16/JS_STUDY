const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');
input = input.map((x) => Number(x.trim('\r')));

const n = input[0];

let dp = new Array(n+1);
for (let i=0; i<dp.length; i++) {
  dp[i] = new Array(3).fill(0);
}

dp[1][0] = 0; // 안마심
dp[1][1] = input[1]; // 한잔
dp[1][2] = input[1]; // 두잔

for (let i=2; i<dp.length; i++) {
  dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1], dp[i-1][2]);
  dp[i][1] = dp[i-1][0] + input[i];
  dp[i][2] = dp[i-1][1] + input[i];
}

console.log(Math.max(dp[n][0], dp[n][1], dp[n][2]));

/*
메모리: 12384 KB
시간: 188 ms
*/