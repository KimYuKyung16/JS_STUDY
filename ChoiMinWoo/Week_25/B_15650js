const fs = require("fs");
const [n, m] = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let arr = new Array(n).fill().map((a, i) => i + 1);
let visited = new Array(n).fill(0);
let nums = [];
let answer = "";
dfs(arr, 0, 0);
console.log(answer);
function dfs(arr, dep, start) {
  if (dep === m) {
    let result = [];

    for (let i = 0; i < nums.length; i++) result.push(arr[nums[i]]);
    for (let i = 0; i < result.length; i++) answer += result[i] + " ";
    answer += "\n";
    return;
  }
  for (let i = start; i < arr.length; i++) {
    if (visited[i]) continue;
    visited[i] = 1;
    nums.push(i);
    dfs(arr, dep + 1, i + 1);
    visited[i] = 0;
    nums.pop();
  }
}

/*
메모리: 9352	 KB
시간: 120 ms
*/
