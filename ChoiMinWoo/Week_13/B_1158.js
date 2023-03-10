const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split(" ");
let [n, k] = input;
let arr = [];
let answer = [];
for (let i = 1; i <= n; i++) {
    arr.push(i);
}

let a = 1;
while (arr.length) {
    if (a % k === 0) {
        answer.push(arr.shift());
    } else {
        arr.push(arr.shift());
    }
    a++;
}

console.log("<" + answer.join(", ") + ">");

/*
메모리: 18108 KB
시간: 3516 ms
*/
