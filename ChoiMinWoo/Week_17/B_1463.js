const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim();
let num = +input;
let DP = new Array(num + 1).fill(0);
for (let i = 2; i <= num; i++) {
    DP[i] = DP[i - 1] + 1;
    if (i % 3 === 0) {
        DP[i] = Math.min(DP[i], DP[i / 3] + 1);
    }
    if (i % 2 === 0) {
        DP[i] = Math.min(DP[i], DP[i / 2] + 1);
    }
}
console.log(DP[num]);
/*
메모리: 17440 KB
시간: 192 ms
*/
