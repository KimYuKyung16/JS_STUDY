let input = Number(require('fs').readFileSync('example.txt').toString());
const dp = Array.from(new Array(input + 1), () => new Array(10));

// dp[n][i] = n자리 수면서 i로 끝나는 수
dp[1] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];     // 1자리 수일때
dp[2] = [1, 1, 2, 2, 2, 2, 2, 2, 2, 1];     // 2자리 수일때

for (let n = 3; n <= input; n++) {      
  for (let i = 0; i < 10; i++) {
    if (i === 0) {      // 1로 끝나는 수일 경우
      dp[n][i] = dp[n - 1][i + 1] % 1000000000;
    } else if (i >= 1 && i <= 8) {      // 1이상 8이하로 끝나는 수일 경우
      dp[n][i] = (dp[n - 1][i - 1] + dp[n - 1][i + 1]) % 1000000000;
    } else {        //9로 끝나는 수일 경우
      dp[n][i] = dp[n - 1][i - 1] % 1000000000;
    }
  }
}
let sum = 0;
for (let j = 0; j < 10; j++) {
  sum += dp[input][j];
}

console.log(sum % 1000000000);

// *
// 메모리: 9596 KB
// 시간: 136 ms
// */