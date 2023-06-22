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
  if (i + array[i][0] > N) continue;
  dp[i] += array[i][1];
  for (let j=i+array[i][0]; j<N; j++) {
    dp[j] = Math.max(dp[i], dp[j]);
  }
}

console.log(Math.max(...dp));

/*
메모리: 9588 KB
시간: 172 ms
*/