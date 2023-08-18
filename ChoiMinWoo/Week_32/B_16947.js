const fs = require("fs");
let arr = fs.readFileSync("dev/stdin").toString().trim().split("\r\n");
const N = +arr.shift();
arr = arr.map((v) => v.split(" ").map(Number));
let flag = 0;
let answer = [];
const graph = Array.from({ length: N + 1 }, () => []);
let cycle = [];
let visited = new Array(N + 1).fill(0);

for (let i = 0; i < arr.length; i++) {
  let start = arr[i][0];
  let end = arr[i][1];
  graph[start].push(end);
  graph[end].push(start);
}

for (let i = 1; i <= N; i++) {
  visited[i] = 1;
  dfs([i]);
  visited[i] = 0;
}
[1, 2, 3];
for (let i = 1; i <= N; i++) {
  if (cycle.includes(i)) answer.push(0);
  else {
    let start = i;
    visited[start] = 1;
    check(start, 0);
    visited[start] = 0;
  }
}

console.log(answer.join(" "));

function check(start, count) {
  for (let i = 0; i < graph[start].length; i++) {
    let next = graph[start][i];
    if (cycle.includes(next)) {
      answer.push(count + 1);
      return;
    }
    if (!visited[next]) {
      visited[next] = 1;
      check(next, count + 1);
      visited[next] = 0;
    }
  }
}

function dfs(lines) {
  if (flag) {
    return;
  }
  for (let i = 0; i < graph[lines[lines.length - 1]].length; i++) {
    let next = graph[lines[lines.length - 1]][i];
    if (next == lines[0] && lines.length > 2) {
      cycle = lines;
      flag = 1;
      return;
    }
    if (!visited[next]) {
      visited[next] = 1;
      dfs([...lines, next]);
      visited[next] = 0;
    }
  }
}
