const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');
input = input.map((x) => x.trim('\r'));
let answer = 0;
const [N, M] = input[0].split(' ').map(Number);

let tree = new Array(N).fill().map(() => []);

for (let i=1; i<input.length; i++) {
  let [a, b] = input[i].split(' ').map(Number);
  tree[a].push(b);
  tree[b].push(a);
}

let visited = new Array(+input[0][0]).fill(0);
for (let i=0; i<tree.length; i++) {
  if (answer === 1) break;
  visited[i] = 1;
  dfs(i, 1);
  visited[i] = 0;
}

function dfs(currentNum, count) {
  if (count === 5) {
    answer = 1;
    return;
  }
  for (let i=0; i<tree[currentNum].length; i++) {
    if (visited[tree[currentNum][i]] === 1) continue;
    visited[tree[currentNum][i]] = 1;
    dfs(tree[currentNum][i], count+1);
    visited[tree[currentNum][i]] = 0;
  }
}

console.log(answer);

/*
메모리: 12276 KB
시간: 460 ms
*/