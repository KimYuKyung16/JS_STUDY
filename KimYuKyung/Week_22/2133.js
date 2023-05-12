const fs = require('fs');
let n = Number(fs.readFileSync('input.txt').toString().trim());

let dp = new Array(n+1).fill(0);

dp[2] = 3;
dp[4] = 11;

for (let i=6; i<=dp.length; i+=2) {
  dp[i] = dp[i-2] * 3;
  
  for (let j=i-4; j>0; j-=2) {
    dp[i] += dp[j] * 2;
  }

  dp[i] += 2;
}

console.log(dp[n]);

/*
메모리: 9340 KB
시간: 160 ms
*/