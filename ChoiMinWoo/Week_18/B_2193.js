let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim();
let n = +input;
let dp = [1, 1, 2];
for (let i = 3; i <= n; i++) {
  dp[i] = BigInt(dp[i - 1]) + BigInt(dp[i - 2]);
}

console.log(BigInt(dp[n - 1]).toString());

/*
메모리: 9332 KB
시간: 120 ms
*/
