const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');
input = input.map((x) => x.trim('\r'));

const T = Number(input[0]);

for (let i=1; i<input.length; i+=3) {
  let n = Number(input[i]);
  let scores1 = input[i+1].split(' ').map(Number);
  let scores2 = input[i+2].split(' ').map(Number);

  let dp = new Array(n+1);
  for (let j=0; j<dp.length; j++) {
    dp[j] = new Array(3);
  }

  dp[1][0] = 0; // 공백
  dp[1][1] = scores1[0]; // 위쪽
  dp[1][2] = scores2[0]; // 아래쪽

  for (let k=2; k<=n; k++) {
    dp[k][0] = Math.max(dp[k-1][0], dp[k-1][1], dp[k-1][2]);
    dp[k][1] = Math.max(dp[k-1][2] + scores1[k-1], dp[k-1][0] + scores1[k-1]);
    dp[k][2] = Math.max(dp[k-1][1] + scores2[k-1], dp[k-1][0] + scores2[k-1]);
  }

  console.log(Math.max(dp[n][0], dp[n][1], dp[n][2]))
}

/*
메모리: 126596 KB
시간: 696 ms
*/