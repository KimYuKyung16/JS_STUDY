const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');

const n = +input[0];
const numbers = input[1].split(' ').map(Number);

let dp = new Array(n);

for (let i=0; i<dp.length; i++) {
  dp[i] = new Array(2).fill(0);
}

dp[0][0] = numbers[0];

let maxNum = numbers[0];

for (let i=1; i<dp.length; i++) {
  dp[i][0] = Math.max(dp[i-1][0] + numbers[i], numbers[i]); // 지금까지의 값들 더한 값과 이번에 들어올 값 비교
  dp[i][1] = Math.max(dp[i-1][0], dp[i-1][1] + numbers[i]); // (저번 값들까지의 총합, 저번 값을 제외했을 경우에 이번값을 더했을 경우)

  let middle = Math.max(dp[i][0], dp[i][1]); // 둘 중에 더 큰 값
  maxNum = Math.max(maxNum, middle) // 지금까지 제일 컸던 값과 비교
}

console.log(maxNum)

/*
메모리: 28364 KB
시간: 304 ms
*/