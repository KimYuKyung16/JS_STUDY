const fs = require("fs");
let arr = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\r\n")
  .map((v) => v.split(" ").map(Number));
let answer = [];
let graph;
let visited;
let move = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];

//대각선까지 고려
let X = [0, 1, 1, 1, 0, -1, -1, -1];
let Y = [1, 1, 0, -1, -1, -1, 0, 1];
for (let i = 0; i < arr.length - 1; i++) {
  const [w, h] = arr[i];
  let count = 0;
  graph = arr.slice(i + 1, i + h + 1);
  i = i + h;
  visited = [...Array(h)]
    .map(() => false)
    .map(() => [...Array(w)].map(() => false));
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (visited[i][j]) continue;
      let land = bfs([j, i], w, h);
      if (land) count++;
    }
  }
  answer.push(count);
}
console.log(answer.join("\n"));

function bfs(start, w, h) {
  let queue = [start];
  let count = 0;
  while (queue.length) {
    let [x, y] = queue.shift();
    if (!visited[y][x]) {
      if (graph[y][x]) count++;
      visited[y][x] = 1;
      for (let i = 0; i < 8; i++) {
        const nextX = x + X[i];
        const nextY = y + Y[i];
        if (nextX < 0 || nextY < 0 || nextX >= w || nextY >= h) continue;
        if (visited[nextY][nextX]) continue;
        if (graph[nextY][nextX]) {
          queue.push([nextX, nextY]);
        }
      }
    }
  }
  return count;
}
/*
메모리: 12372	 KB
시간: 236 ms
*/
