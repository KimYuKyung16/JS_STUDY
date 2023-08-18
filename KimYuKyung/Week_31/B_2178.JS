// DFS로 풀면 시간초과나서 BFS로 품.

const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
input = input.map((x) => x.trim("\r"));

const [N, M] = input.shift().split(" ").map(Number);
const array = input.map((x) => x.split("").map(Number));

const direction = [
  [1, 0], // 아래
  [-1, 0], // 위
  [0, 1], // 오른쪽
  [0, -1], // 왼쪽
];

const visited = new Array(N).fill().map(() => new Array(M).fill(0));

visited[0][0] = 1;
bfs();

function bfs() {
  let queue = [[0, 0]];

  while (queue.length !== 0) {
    let [y, x] = queue.shift();

    for (let i = 0; i < 4; i++) {
      let ny = y + direction[i][0];
      let nx = x + direction[i][1];

      if (ny === N - 1 && nx === M - 1) { // (N, M) 위치일 경우
        console.log(visited[y][x] + 1);
        return;
      }
      if (ny >= N || ny < 0 || nx >= M || nx < 0) continue;
      if (visited[ny][nx] || !array[ny][nx]) continue;
      visited[ny][nx] = visited[y][x] + 1;
      queue.push([ny, nx]);
    }
  }
}

/*
메모리: 11776 KB
시간: 200 ms
*/
