const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");
const [num, ...arr] = input;
const stack = [];
const result = [];
for (let i = 0; i < num; i++) {
    let method = arr[i];
    if (method === "pop") {
        stack.length ? result.push(stack.pop()) : result.push(-1);
    } else if (method === "size") {
        result.push(stack.length);
    } else if (method === "empty") {
        stack.length ? result.push(0) : result.push(1);
    } else if (method === "top") {
        stack.length ? result.push(stack[stack.length - 1]) : result.push(-1);
    } else {
        stack.push(method.split(" ")[1]);
    }
}
console.log(result.join("\n"));
