let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .split("\n")
  .map((item) => Number(item));
let cases = input[0];
input.shift();
let arr = [0, 1, 2, 4];
let num = Math.max(...input);
for (let i = 4; i <= num; i++) {
  arr[i] = (arr[i - 1] + arr[i - 2] + arr[i - 3]) % 1000000009; //점화식 사용
}
for (let j = 0; j < cases; j++) {
  console.log(arr[input[j]]);
}

/*
메모리: 46492 KB
시간: 292 ms
*/
