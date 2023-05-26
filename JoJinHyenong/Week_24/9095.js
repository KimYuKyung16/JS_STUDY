const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .split("\n")
  .map((item) => Number(item));

let num = input.shift();
let arr = [0, 1, 2, 4];
for (let i = 0; i < num; i++) {
  let x = input[i];
  for (let j = 4; j <= x; j++) {
    arr[j] = arr[j - 1] + arr[j - 2] + arr[j - 3];
    //console.log(arr[j]);
  }
  console.log(arr[x]);
}

// *
// 메모리: 9368 KB
// 시간: 124 ms
// */
