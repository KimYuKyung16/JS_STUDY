const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim();
const N = +input;
let dp = new Array(N).fill(0);
dp[0] = 3;
dp[1] = 7;
for (let i = 2; i < N; i++) {
    dp[i] = (dp[i - 1] * 2 + dp[i - 2]) % 9901;
}
console.log(dp[N - 1] % 9901);
/*
메모리: 10652 KB
시간: 180 ms
*/
