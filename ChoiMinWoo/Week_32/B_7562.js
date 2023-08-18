const fs = require("fs");
const arr = fs.readFileSync("dev/stdin").toString().trim().split("\r\n");
arr.shift();

let X = [2, 2, -2, -2, 1, 1, -1, -1];
let Y = [1, -1, 1, -1, 2, -2, 2, -2];
while (arr.length) {
  const x = arr.shift();
  const start = arr.shift().split(" ").map(Number);
  const goal = arr.shift().split(" ").map(Number);

  dfs(start, goal, x);
}

function dfs(start, goal, size) {
  let queue = [];
  queue.push(start);
  while (queue.length) {
    let graph;
    let [x, y] = queue.shift();
    if (x === goal[0] && y === goal[1]) {
      console.log(graph[x][y] - 1);
    }
    for (let i = 0; i < 8; i++) {
      let nx = x + X[i];
      let ny = y + Y[i];
      if (nx < 0 || ny < 0 || nx >= size || ny >= size) continue;
      if (graph[nx][ny]) continue;

      graph[nx][ny] = graph[x][y] + 1;
      queue.push([nx, ny]);
    }
  }
}
/*
메모리: 47288	 KB
시간: 912 ms
*/
