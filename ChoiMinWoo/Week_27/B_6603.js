const fs = require("fs");
const arr = fs.readFileSync("dev/stdin").toString().trim().split("\r\n");
arr.pop();

for (let i = 0; i < arr.length; i++) {
  let [num, ...array] = arr[i].split(" ");
  let visited = new Array(+num).fill(0);
  let answer = "";
  let selected = [];
  dfs(array, 0, 0);
  console.log(answer);
  function dfs(array, dep, start) {
    if (dep === 6) {
      let result = [];
      for (let i = 0; i < selected.length; i++) result.push(array[selected[i]]);
      for (let i = 0; i < result.length; i++) answer += result[i] + " ";
      answer += "\n";
      return;
    }
    for (let i = start; i < array.length; i++) {
      if (visited[i]) continue;
      selected.push(i);
      visited[i] = 1;
      dfs(array, dep + 1, i + 1);
      selected.pop();
      visited[i] = 0;
    }
  }
}
/*
메모리: 11852	 KB
시간: 184	 ms
*/
