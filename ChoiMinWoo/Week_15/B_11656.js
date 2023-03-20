const fs = require("fs");
const input = fs.readFileSync("input.txt").toString();
let answer = [];
for (let i = 0; i < input.length; i++) {
    answer.push(input.slice(i));
}
console.log(answer.sort().join("\n"));
/*
메모리: 10444 KB
시간: 168 ms
*/
