const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim();
let array = input;
let stack = [];
let answer = "";
for (let i = 0; i < array.length; i++) {
    if (array[i].charCodeAt() >= 65 && array[i].charCodeAt() <= 90) {
        answer += array[i];
    } else if (array[i] === "(") {
        stack.push(array[i]);
    } else if (array[i] === ")") {
        //stack이 있으면서 스택의 마지막이 "("이 아니면 pop()
        while (stack.length && stack[stack.length - 1] !== "(") {
            answer += stack.pop();
        }
        stack.pop(); // "("제거
    } else if (array[i] === "+" || array[i] === "-") {
        //stack이 있으면서 스택의 마지막이 "("이 아니면 answer+=pop()
        while (stack.length && stack[stack.length - 1] !== "(") {
            answer += stack.pop();
        }
        stack.push(array[i]);
    } else if (array[i] === "*" || array[i] === "/") {
        while (
            (stack.length && stack[stack.length - 1] === "*") ||
            stack[stack.length - 1] === "/"
        ) {
            answer += stack.pop();
        }
        stack.push(array[i]);
    }
}
while (stack.length) {
    answer += stack.pop();
}
console.log(answer);
/*
메모리: 9320 KB
시간: 120 ms
*/
