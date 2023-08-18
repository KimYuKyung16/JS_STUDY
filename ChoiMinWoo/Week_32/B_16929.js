const fs = require("fs");
const arr = fs.readFileSync("dev/stdin").toString().trim().split("\r\n");
const [n, m] = arr.shift().split(" ");
let move = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];
const graph = [];
let visited = new Array(+n).fill().map(() => new Array(+m).fill(0));
let flag = 0;
let start;
for (let i = 0; i < arr.length; i++) {
  graph.push(arr[i].split(""));
}

for (let i = 0; i < n; i++) {
  if (flag) break;
  for (let j = 0; j < m; j++) {
    start = [i, j];
    visited[i][j] = 1;
    dfs(i, j, 1);
    visited[i][j] = 0;
    if (flag) break;
  }
}
flag ? console.log("Yes") : console.log("No");
function dfs(x, y, k) {
  if (flag) return;
  for (let i = 0; i < 4; i++) {
    let nx = x + move[i][0];
    let ny = y + move[i][1];

    if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
    if (graph[nx][ny] !== graph[start[0]][start[1]]) continue;

    if (!visited[nx][ny]) {
      visited[nx][ny] = 1;
      dfs(nx, ny, k + 1);
      visited[nx][ny] = 0;
      continue;
    } else if (k >= 4 && nx == start[0] && ny == start[1]) {
      flag = 1;
      return;
    }
  }
}
/*
메모리: 10636	 KB
시간: 3056	 ms
*/
