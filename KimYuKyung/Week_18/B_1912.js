let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');
let n = Number(input[0]);
let array = input[1].split(' ').map((x) => Number(x));

let dp = new Array(n).fill(0);

dp[0] = array[0]; // 제일 처음 값 미리 줌.

// 푼 방식: 현재 인덱스 값 + 전 인덱스값과 전 인덱스의 값을 비교해서 더 큰 것을 현재 인덱스의 값으로 채택
// i까지의 값들 중에서 제일 큰 값들을 넣을 수 있다! 
for (let i=1; i<dp.length; i++) {
  dp[i] = array[i];
  dp[i] = Math.max(dp[i-1] + dp[i], dp[i]);
}

console.log(Math.max(...dp));

/*
메모리: 16116 KB
시간: 212 ms
*/