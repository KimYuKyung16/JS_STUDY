const fs = require("fs");
let arr = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\r\n")
  .map(Number);
arr.shift();
let answer = [];
let DP = [0, 1, 1, 1, 2, 2, 3, 4, 5, 7, 9];
let max = Math.max(...arr);
for (let i = 11; i <= max; i++) {
  DP[i] = DP[i - 2] + DP[i - 3];
}
for (let i = 0; i < arr.length; i++) {
  answer.push(DP[arr[i]]);
}
console.log(answer.join("\n"));
/*
메모리: 9604	 KB
시간: 120 ms
*/
