const fs = require("fs");
const input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
let [num, ...array] = input;
let DP = new Array(11).fill(0);
DP[1] = 1;
DP[2] = 2;
DP[3] = 4;
for (let i = 4; i <= 10; i++) {
  DP[i] = DP[i - 1] + DP[i - 2] + DP[i - 3];
}
for (let i = 0; i < num; i++) {
  console.log(DP[array[i]]);
}
/*
메모리: 9324 KB
시간: 116 ms
*/
