const fs = require("fs");
let arr = fs.readFileSync("dev/stdin").toString().trim().split("\r\n");
let N = +arr.shift();
let visited = new Array(N).fill(0);
let graph = new Array(N).fill().map((a, i) => i + 1);
console.log(graph);

console.log(visited);

bfs(1);

function bfs(start, N) {
  let queue = [start];
  visited[start] = 1;
  while (queue.length) {
    let point = queue.pop();
    console.log(point);
    for (let i = 0; i < graph.length; i++) {
      if (visited[graph[i]]) return;
      queue.push(graph[i]);
      visited[graph[i]] = 1;
    }
  }
}

/*
메모리: 12372	 KB
시간: 236 ms
*/
