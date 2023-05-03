const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\r\n");
const N = +input.shift();
let dp = new Array(N).fill(0);
for (let i = 0; i < N; i++) {
    let array = input[i].split(" ").map(Number);
    console.log(array);
}
console.log(dp);
/*
메모리: 10652 KB
시간: 180 ms
*/
