const fs = require("fs");
const arr = fs.readFileSync("dev/stdin").toString().trim().split("\r\n");
const number = +arr.shift();
let array = arr.map((a) => a.split(" ").map(Number));

let max = 0;
let selected = [];
dfs(array, 0);
console.log(max);
function dfs(array, start) {
  if (start >= number) {
    let point = 0;
    console.log(selected);
    for (let i = 0; i < selected.length; i++) {
      point += array[selected[i]][1];
    }
    if (start > number) point -= array[selected[selected.length - 1]][1];
    if (point > max) max = point;
  }
  for (let i = start; i < array.length; i++) {
    selected.push(i);
    dfs(array, i + array[i][0]);
    selected.pop();
  }
}
/*
메모리: 9960	 KB
시간: 188	 ms
*/
