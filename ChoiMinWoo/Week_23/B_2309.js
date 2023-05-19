const fs = require("fs");
let input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\r\n")
  .map(Number);

let a = input.reduce((a, b) => a + b) - 100;

for (let i = 0; i < input.length; i++) {
  for (let j = i + 1; j < input.length; j++) {
    if (a === input[i] + input[j]) {
      input = input.filter((a) => a != input[i] && a != input[j]);
      break;
    }
  }
  if (input.length === 7) break;
}

input.sort((a, b) => a - b);
console.log(input.join("\n").trim());
/*
메모리: 9324 KB
시간: 116 ms
*/
