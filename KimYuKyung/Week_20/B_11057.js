const fs = require('fs');
let N = Number(fs.readFileSync('input.txt').toString().trim());

let answer = 0;
let dp = new Array(N+1).fill(0);

for (let i=0; i<dp.length; i++) {
  dp[i] = new Array(10).fill(0);
}

for (let i=0; i<10; i++) {
  dp[1][i] = 1;
}

for (let i=2; i<dp.length; i++) {
  for (let j=0; j<10; j++) {
    for (let k=j; k<10; k++) {
      dp[i][j] = (dp[i][j] + dp[i-1][k]) % 10007; 
    }
  }
}

for (let i=0; i<10; i++) {
  answer += dp[N][i] % 10007;
}

console.log(answer % 10007);

/*
메모리: 9980 KB
시간: 188 ms
*/