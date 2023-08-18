const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');
input = input.map((x) => x.trim('\r'));

const N = +input[0];
let array = [];
for (let i=1; i<input.length; i++) {
  array.push(input[i].split(' ').map(Number));
}

let dp = new Array(N).fill(0);
dp[0] = 0;

for (let i=0; i<dp.length; i++) {
  // 현재 날짜에 상담에 걸리는 시간을 더했을 때가 퇴사일보다 크면 상담 불가능
  if (i + array[i][0] > N) continue; 
  dp[i] += array[i][1]; // 본인 날짜에 진행하는 상담비 더하기
  for (let j=i+array[i][0]; j<N; j++) {
    // 본인 날짜에 진행하는 상담비와 그 다음에 받을 수 있는 상담비 비교?
    dp[j] = Math.max(dp[i], dp[j]);
  }
}

console.log(Math.max(...dp));

/*
메모리: 9588 KB
시간: 172 ms
*/