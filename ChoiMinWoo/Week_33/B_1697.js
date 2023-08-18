const fs = require("fs");
let [N, K] = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
let move = [+1, -1, 2];
let visited = new Array(100001).fill(0);
bfs(N);
function bfs(start) {
  let queue = [[start, 0]];

  visited[start] = 1;
  while (queue.length) {
    let [cur, count] = queue.shift();
    if (cur === K) {
      console.log(count);
      return;
    }

    for (let i = 0; i <= 2; i++) {
      let next = i === 2 ? cur * move[i] : cur + move[i];

      if (next < 0 || next > 100001) continue;
      if (!visited[next]) {
        visited[next] = 1;
        queue.push([next, count + 1]);
      }
    }
  }
}

/*
메모리: 12372	 KB
시간: 236 ms
*/
