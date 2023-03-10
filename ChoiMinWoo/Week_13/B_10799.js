const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim();
const reg = "()";
input = input.replaceAll(reg, "|");
let answer = 0;
let stack = [];
console.log(input);
for (let i = 0; i < input.length; i++) {
    if (input[i] === "(") {
        stack.push(1);
    } else if (input[i] === ")") {
        answer += stack.pop();
    } else {
        stack.forEach((a, i) => stack[i]++);
    }
}
console.log(answer);
/*
메모리: 13472 KB
시간: 2680 ms
*/
