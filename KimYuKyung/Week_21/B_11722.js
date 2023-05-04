const fs = require('fs');
let [n, a] = fs.readFileSync('input.txt').toString().trim().split('\n');

n = +n;
a = a.split(' ').map(Number);

let dp = new Array(n).fill(1);

for (let i=1; i<dp.length; i++) {
  let max = dp[i];
  for (let j=i; j>=0; j--) {
    if (a[j] > a[i]) {
      max = Math.max(max, dp[i] + dp[j]);
    }
  }
  dp[i] = max;
}

console.log(Math.max(...dp));

/*
메모리: 9660 KB
시간: 192 ms
*/