// const fs = require("fs");
// let [e, s, m] = fs
//   .readFileSync("dev/stdin")
//   .toString()
//   .trim()
//   .split(" ")
//   .map(Number);
// let answer = 1;
// while (1) {
//   if (
//     (answer - e) % 15 === 0 &&
//     (answer - s) % 28 === 0 &&
//     (answer - m) % 19 === 0
//   ) {
//     console.log(answer);
//     break;
//   }

//   answer++;
// }

function solution(input) {
  let [e, s, m] = input;
  let answer = 1;
  while (1) {
    if (
      (answer - e) % 15 === 0 &&
      (answer - s) % 28 === 0 &&
      (answer - m) % 19 === 0
    ) {
      console.log(answer);
      break;
    }

    answer++;
  }
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;
let list = [];
rl.on("line", function (line) {
  input = line;
  rl.close();
}).on("close", function () {
  // list = input.split(' ').map((el) => el);
  list = input.split(" ").map((el) => parseInt(el)); // 입력값이 정수라면 parseInt로 형 변환
  solution(list);
  process.exit();
});
/*
메모리: 9324 KB
시간: 116 ms
*/
