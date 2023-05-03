let input = require("fs").readFileSync("example.txt").toString().split("\n");
const n = Number(input[0]);
const arr = input[1].split(" ").map((num) => Number(num));
const dp = Array(n).fill(0);

for (let i = 0; i < n; i++) {
  dp[i] = arr[i];

  for (let j = 0; j < i; j++) {
    if (arr[j] < arr[i]) {
      dp[i] = Math.max(dp[i], dp[j] + arr[i]);
    }
  }
  console.log(dp);
}

console.log(Math.max(...dp));

// *
// 메모리: 9892 KB
// 시간: 188 ms
// */
