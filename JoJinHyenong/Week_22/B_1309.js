let input = require("fs").readFileSync("example.txt").toString();
input = +input;
let dp = [];
dp[0] = 0;
dp[1] = 3;
dp[2] = 7;
for (let i = 3; i <= input; i++) {
  dp[i] = (dp[i - 1] * 2 + dp[i - 2]) % 9901;
}
console.log(dp[input]);

// *
// 메모리: 12912 KB
// 시간: 188 ms
// */
