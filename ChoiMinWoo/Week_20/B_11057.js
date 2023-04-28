//다시
const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim();
const N = +input;
var dp = [[], new Array(10).fill(1)];
for (var i = 2; i <= N; i++) {
    dp[i] = [];
    dp[i][0] = dp[i - 1][0] % 10007;
    for (var j = 1; j < 10; j++) {
        dp[i][j] = (dp[i][j - 1] + dp[i - 1][j]) % 10007;
    }
}
console.log(dp[N].reduce((a, v) => a + v, 0) % 10007);
/*
메모리: 27952 KB
시간: 256 ms
*/
