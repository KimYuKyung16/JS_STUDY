// BFS
const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
input = input.map((x) => x.trim("\r"));

const testcase = +input.shift();

const dy = [2, 2, 1, -1, -2, -2, -1, 1];
const dx = [-1, 1, 2, 2, 1, -1, -2, -2];

for (let i = 0; i < testcase; i++) {
  const l = +input.shift();
  const init = input.shift().split(" ").map(Number);
  const destination = input.shift().split(" ").map(Number);

  if (destination[0] === init[0] && destination[1] === init[1]) {
    console.log(0);
    continue;
  }

  bfs(init, l, destination);
}

function bfs(init, len, destination) {
  let visited = new Array(len).fill().map(() => new Array(len).fill(0));
  let queue = [init];

  while (queue.length !== 0) {
    const [cy, cx] = queue.shift();

    for (let i = 0; i < dy.length; i++) {
      const ny = cy + dy[i];
      const nx = cx + dx[i];
      if (ny >= len || ny < 0 || nx >= len || nx < 0) continue;
      if (visited[ny][nx]) continue;
      if (ny === destination[0] && nx === destination[1]) {
        console.log(visited[cy][cx] + 1);
        return;
      }
      visited[ny][nx] = visited[cy][cx] + 1;
      queue.push([ny, nx]);
    }
  }
}

/*
메모리: 30540 KB
시간: 480 ms
*/