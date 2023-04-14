let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');
input = input.map((x) => Number(x.trim('\r')));

let answer = '';
T = input[0];

let dp = new Array(100000+1);

for (let i=0; i<dp.length; i++) {
  dp[i] = new Array(4).fill(0);
}

dp[1][1] = 1;
dp[2][2] = 1;
dp[3][1] = 1;
dp[3][2] = 1;
dp[3][3] = 1;

// 푼 방식: 값이 연속으로 나오면 안되기 때문에
// 1일 때는 그 전값이 2와 3인 경우, 2일 때는 그 전 값이 1과 3인 경우, 3일 때는 그 전 값이 1과 2일 경우로 나눠서 계산하기!

for (let i=4; i<=100000; i++) {
  dp[i][1] = dp[i-1][2] % 1000000009 + dp[i-1][3] % 1000000009;
  dp[i][2] = dp[i-2][1] % 1000000009 + dp[i-2][3] % 1000000009;
  dp[i][3] = dp[i-3][1] % 1000000009 + dp[i-3][2] % 1000000009;
} 

for (let i=1; i<=T; i++) {
  let N = input[i];

  answer += (((dp[N][1] + dp[N][2] + dp[N][3]) % 1000000009) + '\n'); // 1, 2, 3일 경우 다 더해주기
}

console.log(answer);

/*
메모리: 27516 KB
시간: 252 ms
*/