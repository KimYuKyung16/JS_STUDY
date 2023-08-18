const fs = require("fs");
let arr = fs.readFileSync("dev/stdin").toString().trim().split("\n");
arr.shift();
arr = arr.map((v) => v.split(" ").map(Number));
let answer = [];
let m;
let n;
let imp;
let count;

for (let i = 0; i < arr.length; i += 2) {
  count = 0;
  m = arr[i][0];
  n = arr[i][1];
  imp = arr[i + 1].map((v, i) => [v, i]);

  while (imp) {
    let max = Math.max(...imp.map((v) => v[0]));
    if (imp[0][0] >= max) {
      let pop = imp.shift()[1];
      count++;
      if (pop === n) {
        answer.push(count);
        break;
      }
    } else {
      imp.push(imp.shift());
    }
  }
}
console.log(answer.join("\n"));
/*
메모리: 11620	 KB
시간: 204 ms
*/
