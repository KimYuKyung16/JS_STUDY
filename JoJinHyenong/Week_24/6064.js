const fs = require("fs");
const input = fs
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

function lcm(x, y) {
  // 최소공배수
  let bigNum = Math.max(x, y);
  let smallNum = Math.min(x, y);
  for (let i = bigNum; i <= bigNum * smallNum; i += bigNum) {
    if (i % bigNum === 0 && i % smallNum === 0) {
      return i;
    }
  }
}
const array = input.splice(1);
const answer = [];
array.forEach((item) => {
  const [M, N, X, Y] = item;
  const last = lcm(N, M); // 최소공배수에 멸망.
  let x = X;
  let y = Y;
  while (true) {
    if (x > last || y > last) {
      // 멸망
      answer.push(-1);
      break;
    } else if (x > y) {
      //  // x가 더 크면 y를 더해줌.
      y += N;
    } else if (x < y) {
      //  y가 더 크면 x를 더해줌
      x += M;
    } else {
      // x랑 y 가 같다면 정답
      answer.push(x);
      break;
    }
  }
});

console.log(answer.join("\n"));

// *
// 메모리: 11800 KB
// 시간: 396 ms
// */
