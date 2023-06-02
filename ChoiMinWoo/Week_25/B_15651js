const fs = require("fs");
const [n, m] = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const arr = new Array(n).fill().map((a, i) => i + 1);
let answer = "";
let nums = [];

dfs(arr);
console.log(answer);
function dfs(arr) {
  if (nums.length === m) {
    let result = [];
    for (let i = 0; i < nums.length; i++) result.push(arr[nums[i]]);
    for (let i = 0; i < result.length; i++) answer += result[i] + " ";
    answer += "\n";
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    nums.push(i);
    dfs(arr);
    nums.pop();
  }
}

/*
메모리: 407580	 KB
시간: 2472	 ms
*/
