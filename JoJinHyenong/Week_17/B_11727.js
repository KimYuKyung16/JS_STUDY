const input = require('fs').readFileSync('example.txt').toString();
let dp = [0, 1, 3]; // dp[1] = 1, dp[2] = 3

for (let i = 3; i <= input; i++) {
  dp[i] = (dp[i - 1] + 2 * dp[i - 2]) % 10007;
}
console.log(dp[input]);
