const input = require('fs').readFileSync('example.txt').toString().split("\n").map((item)=>Number(item));
const n = input[0];
const dp = new Array(n+1).fill(0);      // 값을 넣어줄 배열 생성

dp[1]=1;        // n이 1일때는 1개 고정
dp[2]=1;        // N이 2일때도 1개 고정
for(let i=3;i<=n;i++){
    dp[i] = BigInt(dp[i-1])+BigInt(dp[i-2]);    //피보나치 점화식
}
console.log(String(dp[n]));

// *
// 메모리: 9332 KB
// 시간: 128 ms
// */