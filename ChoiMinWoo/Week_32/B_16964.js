const fs = require("fs");
let arr = fs.readFileSync("dev/stdin").toString().trim().split("\r\n");
console.log(arr);
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
    console.log(answer);
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
메모리: 12372	 KB
시간: 236 ms
*/
