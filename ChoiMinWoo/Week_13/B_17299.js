//조금 더 고민..
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");
let [num, arr] = input;
let array = arr.split(" ").map(Number);
let answer = new Array(+num).fill(-1);
let F = {};
array.forEach((x) => {
    F[x] = (F[x] || 0) + 1;
});
let stack = [];

for (let i = 0; i < num; i++) {
    while (stack.length && F[array[i]] > F[array[stack[stack.length - 1]]]) {
        answer[stack.pop()] = array[i];
    }
    stack.push(i);
}

console.log(...answer);
