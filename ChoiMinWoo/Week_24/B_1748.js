const fs = require("fs");
const input = +fs.readFileSync("dev/stdin").toString().trim();
let answer = 0;
let cnt = 1;
let num = 10;
for (let i = 1; i <= input; i++) {
  if (i % num == 0) {
    num *= 10;
    cnt++;
  }
  answer += cnt;
}
console.log(answer);

// const readline = require("readline");
// const rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout,
// });
// let input;
// rl.on("line", function (line) {
// 	input = +line.toString();
// }).on("close", function () {
// 	let answer = 0;

// 	for (let i = 1; i <= input; i++) {
//     answer += String(i).length;
//   }
//   console.log(answer)
// 	process.exit();
// });
/*
메모리: 9592	 KB
시간: 744 ms
*/
