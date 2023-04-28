let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
const count = Number(input.shift());
input = input.map((value) =>
  value.split(" ").map((element) => Number(element))
);
console.log(input[1]);
for (let i = 1; i < count; i++) {
  // 이전 행의 값들 중 자신의 열을 제외한 값들중 최솟값을 더해서 반환
  input[i][0] = Math.min(input[i - 1][1], input[i - 1][2]) + input[i][0];
  input[i][1] = Math.min(input[i - 1][0], input[i - 1][2]) + input[i][1];
  input[i][2] = Math.min(input[i - 1][0], input[i - 1][1]) + input[i][2];
}
console.log(Math.min(...input[count - 1]));

/*
메모리: 9612 KB
시간: 188 ms
*/
