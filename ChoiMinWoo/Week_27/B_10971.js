const fs = require("fs");
let [a, ...arr] = fs.readFileSync("dev/stdin").toString().trim().split("\r\n");
arr = arr.map((a) => a.split(" ").map(Number));
let visited = new Array(+a).fill(0);
console.log(visited);
console.log(a, arr[1]);
let value = 0;
let selected = [];
dfs(arr, 0);
function dfs(array, dep) {
  if (dep === +a) {
    return;
  }
  for (let i = 0; i < array.length; i++) {}
}
/*
메모리: 9604	 KB
시간: 116 ms
*/
