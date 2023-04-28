let input = require('fs').readFileSync('example.txt').toString().split("\n");

const len = Number(input[0]);     
input.shift();
input = input[0].split(" ").map((item) => Number(item));

const dp = new Array(len).fill(1);      // 
for (let i = 1; i < len; i++) {
  const values = [1];           //첫번째 요소는 기본값1 저장
  for (let j = 0; j < i; j++) {
    if (input[i] > input[j]) {      // i 번째요소와 그 전 요소들을 비교
      values.push(dp[j] + 1);
    }
  }
  dp[i] = Math.max(...values); // 이 값들중 최댓값을 저장
}
console.log(Math.max(...dp));

// *
// 메모리: 11576 KB
// 시간: 208 ms
// */