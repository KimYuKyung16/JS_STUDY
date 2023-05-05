const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
input = input.map((x) => x.trim("\r").split(" ").map(Number));

const n = +input[0];
let dp = new Array(n + 1);

for (let i = 0; i < dp.length; i++) {
  dp[i] = new Array();
}

dp[1].push(+input[1]);

for (let i = 2; i < dp.length; i++) {
  for (let j = 0; j < dp[i - 1].length; j++) {
    let left = dp[i - 1][j] + input[i][j]; // 왼쪽
    let right = dp[i - 1][j] + input[i][j + 1]; // 오른쪽

    if (j === 0) dp[i].push(left, right); // 처음에는 비교할 대상X, 따라서 max 구할 필요X
    else {
      let maxNum = Math.max(dp[i][dp[i].length-1], left);
      dp[i].pop(); // 이전 값 빼기
      dp[i].push(maxNum, right);
    }
  }
}

console.log(Math.max(...dp[n]));

/*
메모리: 16368 KB
시간: 208 ms
*/
