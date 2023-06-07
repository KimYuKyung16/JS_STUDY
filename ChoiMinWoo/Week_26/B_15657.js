const fs = require("fs");
const [a, arr] = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [n, m] = a.split(" ").map(Number);
const array = arr.split(" ").map(Number);
array.sort((a, b) => a - b);

let answer = "";
let selected = [];

dfs(array, 0, 0);
console.log(answer);
function dfs(array, dep, start) {
  if (dep === m) {
    let result = [];
    for (let i = 0; i < selected.length; i++) result.push(array[selected[i]]);
    for (let i = 0; i < result.length; i++) answer += result[i] + " ";
    answer += "\n";
    return;
  }
  for (let i = start; i < array.length; i++) {
    selected.push(i);
    dfs(array, dep + 1, i);
    selected.pop();
  }
}

/*
메모리: 16956	 KB
시간: 200	 ms
*/
