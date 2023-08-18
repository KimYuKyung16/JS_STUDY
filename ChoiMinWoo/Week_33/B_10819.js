const fs = require("fs");
const [a, arr] = fs.readFileSync("dev/stdin").toString().trim().split("\n");
let array = arr.split(" ").map(Number);
let visited = new Array(+a).fill(0);
let max = 0;
let selected = [];
dfs(array, 0);
console.log(max);
function dfs(array, dep) {
  if (dep === +a) {
    let sum = 0;
    for (let i = 0; i < +a - 1; i++) {
      sum += Math.abs(array[selected[i]] - array[selected[i + 1]]);
    }
    if (sum > max) {
      max = sum;
    }
    return;
  }
  for (let i = 0; i < +a; i++) {
    if (visited[i]) continue;
    selected.push(i);
    visited[i] = 1;
    dfs(array, dep + 1);
    visited[i] = 0;
    selected.pop();
  }
}
