const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\r\n");
let arr = input[1].split(" ").map(Number);
let dp = new Array();

for (let i = 0; i < arr.length; i++) {
  dp[i] = arr[i];
  for (let j = 0; j < i; j++) {
    if (arr[j] < arr[i]) {
      dp[i] = Math.max(dp[i], dp[j] + arr[i]);
    }
  }
}

console.log(Math.max(...dp));

/*
메모리: 9916 KB
시간: 184 ms
*/
