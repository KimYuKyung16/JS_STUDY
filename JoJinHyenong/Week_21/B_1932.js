let input = require("fs").readFileSync("example.txt").toString().split("\n");
const n = Number(input[0]);
const tri = input
  .slice(1)
  .map((line) => line.split(" ").map((el) => Number(el))); //2차원 배열로 만듬

for (let i = 1; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    if (j === 0) {
      // 행 값이 같을때
      tri[i][j] += tri[i - 1][j];
    } else if (j === i) {
      tri[i][j] += tri[i - 1][j - 1];
    } else {
      tri[i][j] += Math.max(tri[i - 1][j - 1], tri[i - 1][j]);
    }
  }
}
// console.log(tri);
console.log(Math.max(...tri[n - 1]));

// *
// 메모리: 14188 KB
// 시간: 200 ms
// */
