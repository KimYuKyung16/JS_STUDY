const fs = require("fs");
const [a, ...arr] = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\r\n");
let array = arr.map((a) => a.split(" ").map(Number));

/*
메모리: 9604	 KB
시간: 116 ms
*/
