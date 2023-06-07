const fs = require("fs");
const [n, m] = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let arr = new Array(n).fill().map((a, i) => i + 1);
let answer = "";
let nums = [];
dfs(arr, 0, 0);
console.log(answer);
function dfs(arr, dep, start) {
  let result = [];
  if (dep === m) {
    for (let i = 0; i < nums.length; i++) result.push(arr[nums[i]]);
    for (let i = 0; i < result.length; i++) answer += result[i] + " ";
    answer += "\n";
    return;
  }
  for (let i = start; i < arr.length; i++) {
    nums.push(i);
    dfs(arr, dep + 1, i);
    nums.pop();
  }
}
/*
메모리: 16320	 KB
시간: 208	 ms
*/
