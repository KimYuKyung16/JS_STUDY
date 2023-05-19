const fs = require("fs");
let [num, ...input] = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\r\n");
let arr = input.map((a) => a.split(""));
let answer = 1;
console.log(arr);
for (let i = 0; i < arr.length; i++) {
  answer = 1;
  for (let j = 0; j < arr.length; j++) {
    if (arr[i][j] === arr[i][j + 1]) answer++;
  }
  console.log(answer);
}
/*
메모리: 9324 KB
시간: 116 ms
*/
