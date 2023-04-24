const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim();
let num = +input;
let DP = new Array(num + 1).fill(0);
DP[1] = 1;
DP[2] = 3;
for (let i = 3; i <= num; i++) {
    DP[i] = (DP[i - 1] + DP[i - 2] * 2) % 10007;
}
console.log(DP[num]);
/*
메모리: 9648 KB
시간: 192 ms
*/
