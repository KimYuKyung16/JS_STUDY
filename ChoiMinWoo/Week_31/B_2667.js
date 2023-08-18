const fs = require("fs");
const arr = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const N = +arr.shift();
let answer = [];
const array = arr.map((v) => v.split("").map(Number));

//왼,오,위,아래
let move = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (array[i][j]) dfs(i, j);
  }
}
console.log(answer.length);
console.log(answer.sort((a, b) => a - b).join("\n"));
function dfs(row, col) {
  let count = 0;
  const queue = [[row, col]];
  while (queue.length) {
    const [x, y] = queue.shift();
    if (!array[x][y]) continue;
    array[x][y] = 0;
    count++;
    for (let i = 0; i < 4; i++) {
      const nextX = x + move[i][0];
      const nextY = y + move[i][1];
      if (nextX < 0 || nextY < 0 || nextX >= N || nextY >= N) continue;
      if (array[nextX][nextY]) queue.push([nextX, nextY]);
    }
  }
  answer.push(count);
}
