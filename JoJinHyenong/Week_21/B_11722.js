let input = require("fs").readFileSync("example.txt").toString().split("\n");
const num = +input.shift();
let dp = Array(num).fill(0);
input = input[0].split(" ").map((item) => Number(item));
for (let i = 0; i < num; i++) {
  let max = 0;
  for (let j = 0; j < i; j++) {
    if (input[i] < input[j]) {
      max = Math.max(dp[j], max);
    }
  }
  dp[i] = max + 1;
}
console.log(Math.max(...dp));

// *
// 메모리: 9664 KB
// 시간: 188 ms
// */
