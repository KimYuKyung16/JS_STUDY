const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");
const [num, ...arr] = input;
const queue = [];
const result = [];
for (let i = 0; i < num; i++) {
    let method = arr[i];
    if (method === "pop") {
        queue.length ? result.push(queue.shift()) : result.push(-1);
    } else if (method === "size") {
        result.push(queue.length);
    } else if (method === "empty") {
        queue.length ? result.push(0) : result.push(1);
    } else if (method === "front") {
        queue.length ? result.push(queue[0]) : result.push(-1);
    } else if (method === "back") {
        queue.length ? result.push(queue[queue.length - 1]) : result.push(-1);
    } else {
        queue.push(method.split(" ")[1]);
    }
}
console.log(result.join("\n"));
