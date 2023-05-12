let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\r\n");
let n = +input[0];
let arr = input[1].split(" ").map(Number);
let dp = [arr[0]];

// for (let i = 0; i < arr.length; i++) {
//   let sum = 0;
//   for (let j = i; j < arr.length; j++) {
//     sum += arr[j];
//     dp[i] = Math.max(dp[i], sum);
//   }
// }

for (let i = 1; i < n; i++) {
  dp[i] = dp[i - 1] + arr[i] > dp[i] ? dp[i] + arr[i] : dp[i];
}

console.log(Math.max(...dp));

/*
메모리: 16276 KB
시간: 204 ms
*/
