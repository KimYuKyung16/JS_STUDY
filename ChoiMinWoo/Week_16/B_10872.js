const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim();

let f = 1;
for (let i = input; i > 0; i--) {
    f *= i;
}
console.log(f);
/*
메모리: 9584 KB
시간: 120 ms
*/
