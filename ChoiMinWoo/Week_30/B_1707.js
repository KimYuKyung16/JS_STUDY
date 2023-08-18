const fs = require("fs");
const [a, arr] = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [N, S] = a.trim().split(" ").map(Number);
const array = arr.split(" ").map(Number);
let answer = 0;
dfs(0, 0);
function dfs(dep, sum) {
  if (dep === N) return;
  sum += array[dep];
  if (sum === S) answer++;
  dfs(dep + 1, sum);
  dfs(dep + 1, sum - array[dep]);
}
console.log(answer);

/*
메모리: 9836	 KB
시간: 188 ms
*/
