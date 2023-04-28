const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\r\n");
const N = input.shift();

for (let i = 0; i < N; i++) {
    const num = +input[i * 3];
    const case1 = input[i * 3 + 1].split(" ").map(Number);
    const case2 = input[i * 3 + 2].split(" ").map(Number);
}
/*
메모리: 126596 KB
시간: 696 ms
*/
