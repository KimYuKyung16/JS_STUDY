const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
input = input.map((x) => x.trim("\r"));

const [N, M] = input.shift().split(" ").map(Number);
let board = [];
let answer = "No";

for (let i = 0; i < N; i++) {
  board.push(input.shift());
}

let visited = new Array(N).fill().map(() => new Array(M).fill(0));

const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

for (let y = 0; y < N; y++) {
  if (answer === "Yes") break;
  for (let x = 0; x < M; x++) {
    if (answer === "Yes") break;
    visited[y][x] = board[y][x];
    dfs([y, x], y, x, 1);
    visited[y][x] = 0;
  }
}

console.log(answer);

function dfs(init, y, x, count) {
  if (answer === "Yes") return;
  for (let i = 0; i < 4; i++) {
    let ny = y + dy[i];
    let nx = x + dx[i];

    if (ny < 0 || ny >= N || nx < 0 || nx >= M) continue;
    if (board[ny][nx] !== visited[y][x]) continue;
    if (visited[ny][nx] !== 0) {
      if (count >= 4 && ny === init[0] && nx === init[1]) {
        answer = "Yes";
        return;
      } else {
        continue;
      }
    }
    visited[ny][nx] = board[ny][nx];
    dfs(init, ny, nx, count + 1);
    visited[ny][nx] = 0;
  }
}

/*
메모리: 10580 KB
시간: 204 ms
*/