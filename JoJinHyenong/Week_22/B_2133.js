let input = require("fs").readFileSync("example.txt").toString();
input = +input;

if (input % 2 !== 0) return console.log(0); // 홀수인 경우는 0

const dp = new Array(input + 1).fill(0);
dp[0] = 1;
dp[2] = 3;

for (let i = 4; i <= input; i += 2) {
  dp[i] = dp[i - 2] * 3; // 기본적으로 이전거에서 x3을 하면 됌
  for (let j = 4; j <= i; j += 2) {
    // 예외 케이스인 경우
    dp[i] += dp[i - j] * 2;
  }
}
console.log(dp[input]);

// *
// 메모리: 9336 KB
// 시간: 124 ms
// */
