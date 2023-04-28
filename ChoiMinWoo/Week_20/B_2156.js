const fs = require("fs");
let input = fs
    .readFileSync("dev/stdin")
    .toString()
    .trim()
    .split("\r\n")
    .map(Number);
let N = input.shift();
console.log(input);
/*
메모리: 12384 KB
시간: 188 ms
*/
