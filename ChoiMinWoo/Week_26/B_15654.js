const fs = require("fs");
const [a, arr] = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [n, m] = a.split(" ").map(Number);
const array = arr.split(" ").map(Number);

let answer = "";
let visited = new Array(n).fill(0);

let selected = [];
array.sort((a, b) => a - b);

dfs(array, 0);
console.log(answer);

function dfs(array, dep) {
  if (dep === m) {
    let result = [];
    for (let i = 0; i < selected.length; i++) result.push(array[selected[i]]);
    for (let i = 0; i < result.length; i++) answer += result[i] + " ";
    answer += "\n";
    return;
  }
  for (let i = 0; i < array.length; i++) {
    if (visited[i] === 1) continue;
    selected.push(i);
    visited[i] = 1;
    dfs(array, dep + 1);
    visited[i] = 0;
    selected.pop();
  }
}
/*
메모리: 43168	 KB
시간: 292 ms
*/
