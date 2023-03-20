const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim();
let array = input.split(" ").map(Number);
let arr = array.sort((a, b) => b - a);
let a = arr[0];
let b = arr[1];
let answer = [];
//최대 공략수
for (let i = a; i > 0; i--) {
    if (a % i === 0 && b % i === 0) {
        answer.push(i);
        break;
    }
}
//최소공배수

for (let i = a; i <= b * a; i += a) {
    if (i % b === 0) {
        answer.push(i);
        break;
    }
}

console.log(answer.join("\n"));

/*
메모리: 9332 KB
시간: 120 ms
*/
