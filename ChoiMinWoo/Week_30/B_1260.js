const fs = require("fs");
const arr = fs.readFileSync("dev/stdin").toString().trim().split("\r\n");
const [N, M, V] = arr.shift().split(" ").map(Number);
let graph = new Array(N + 1);
for (let i = 0; i < graph.length; i++) {
  graph[i] = [];
}

for (let i = 0; i < arr.length; i++) {
  let [from, to] = arr[i].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

graph.forEach((v) => {
  v.sort((a, b) => a - b);
});

let visited = new Array(N + 1).fill(0);

let answer_dfs = [];
dfs(V);
console.log(answer_dfs.join(" "));
visited.fill(0);

let answer_bfs = [];
bfs(V);
console.log(answer_bfs.join(" "));

function dfs(start) {
  if (visited[start]) return;
  visited[start] = 1;
  answer_dfs.push(start);
  for (let i = 0; i < graph[start].length; i++) {
    let next = graph[start][i];
    if (visited[next] === 0) {
      dfs(next);
    }
  }
}

function bfs(start) {
  let queue = [start];
  while (queue.length) {
    let a = queue.shift();
    if (visited[a]) continue;
    visited[a] = 1;
    answer_bfs.push(a);
    for (let i = 0; i < graph[a].length; i++) {
      let next = graph[a][i];
      if (!visited[next]) {
        queue.push(next);
      }
    }
  }
}

/*
메모리: 14396	 KB
시간: 240	 ms
*/
