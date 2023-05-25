const fs = require("fs");
let input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\r\n")
  .map(Number);
/*
메모리: 9324 KB
시간: 116 ms
*/
