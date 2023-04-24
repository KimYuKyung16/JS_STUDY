const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\r\n");
let [num, array] = input;
num = +num;
let arr = array.split(" ").map(Number);
let DP = new Array(num + 1).fill(0);
for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
        DP[i] = Math.max(DP[i], DP[i - j] + arr[j - 1]);
    }
}

console.log(DP[num]);
/*
메모리: 9656 KB
시간: 192 ms
*/
