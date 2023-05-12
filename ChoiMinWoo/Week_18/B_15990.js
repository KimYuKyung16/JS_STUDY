const fs = require("fs");
let input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\r\n")
  .map(Number);
const num = input.shift();
console.log(input);
/* 
메모리: 17440 KB
시간: 192 ms
*/
