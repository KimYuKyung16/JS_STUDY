const fs = require('fs');
let [n, a] = fs.readFileSync('input.txt').toString().trim().split('\n');

n = +n;
a = a.split(' ').map(Number);

let dp = new Array(n);

for (let i=0; i<dp.length; i++) {
  dp[i] = new Array(2).fill(1); // 0: 왼쪽 영역, 1: 오른쪽 영역
}

for (let i=1; i<dp.length; i++) { // 왼쪽 영역 구하기(오름차순)
  let max = dp[i][0];
  for (let j=i; j>=0; j--) {
    if (a[j] < a[i]) {
      max = Math.max(max, dp[i][0] + dp[j][0]);
    }
  }
  dp[i][0] = max;
}

dp.reverse();
a.reverse();

for (let i=1; i<dp.length; i++) { // 오른쪽 영역 구하기(내림차순)
  let max = dp[i][1];
  for (let j=i; j>=0; j--) {
    if (a[j] < a[i]) {
      max = Math.max(max, dp[i][1] + dp[j][1]);
    }
  }
  dp[i][1] = max;
}

let result= dp.map((x) => x.reduce((acc, cur) => acc + cur, 0));
console.log(Math.max(...result)-1);

/*
메모리: 9820 KB
시간: 192 ms
*/