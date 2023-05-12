const input = require("fs").readFileSync("example.txt").toString().split("\n");
const len = Number(input[0]);
let array = input[1].split(" ").map((item) => Number(item));
let dp = [array[0]]; // 직전값들의 합 넣는 곳

let Min_num = 0;

for (let i = 0; i < len; i++) {
  // array[i]값이 음수일때만 값이 감소하기 때문에 음수인 경우만 고른다.
  if (array[i] < 0) {
    Min_num = Min_num > array[i] ? array[i] : Min_num; //고른 음수 값중에서 가장 작은 값만 저장
  }
}
const Min_index = array.indexOf(Min_num);
Min_num < 0 ? array.splice(Min_index, 1) : array;

for (let i = 1; i < array.length; i++) {
  dp[i] = array[i] > array[i] + dp[i - 1] ? array[i] : array[i] + dp[i - 1]; //직전까지의 부분합이 현재 값 보다 큰지 아닌지 확인
}
console.log(Math.max(...dp));

// 실패
