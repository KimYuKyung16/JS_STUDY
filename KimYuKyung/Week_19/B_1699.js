const fs = require('fs');
let input = Number(fs.readFileSync('input.txt').toString().trim());

let dp = new Array(input+1).fill(0);

dp[1] = 1;
dp[2] = 2;
dp[3] = 3;

let stack = [];
for (let i=4; i<=input; i++) {
  let sqrtNum = parseInt(Math.sqrt(i));

  if (sqrtNum === Math.sqrt(i)) {
    dp[i] = 1;
    stack.push(i);
  } else {
    let last = stack[stack.length-1] | 0;
    let min = 1000000;

    for (let j = stack.length-1; j>=0; j--) {
      min = Math.min(min, dp[stack[j]] + dp[i-stack[j]]);
    }

    min = Math.min(min, dp[last] + dp[i-last]);
    dp[i] = min;
  }
}

console.log(dp[input]);


/*
메모리: 12364 KB
시간: 292 ms
*/