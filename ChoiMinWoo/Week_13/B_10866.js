const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");
const [num, ...arr] = input;
const deque = [];
const result = [];
for (let i = 0; i < num; i++) {
    let method = arr[i];
    if (method === "pop") {
        deque.length ? result.push(deque.shift()) : result.push(-1);
    } else if (method === "size") {
        result.push(deque.length);
    } else if (method === "empty") {
        deque.length ? result.push(0) : result.push(1);
    } else if (method === "front") {
        deque.length ? result.push(deque[0]) : result.push(-1);
    } else if (method === "back") {
        deque.length ? result.push(deque[deque.length - 1]) : result.push(-1);
    } else {
        let pp = method.split("_")[0];
        let fb = method.split("_")[1].split(" ")[0];
        let x = method.split("_")[1].split(" ")[1];
        if (pp === "push") {
            if (fb === "front") {
                deque.unshift(x);
            } else {
                deque.push(x);
            }
        } else if (pp === "pop") {
            if (fb === "front") {
                deque.length ? result.push(deque.shift()) : result.push(-1);
            } else {
                deque.length ? result.push(deque.pop()) : result.push(-1);
            }
        }
    }
}
console.log(result.join("\n"));

/*
메모리: 12592 KB
시간: 144 ms
*/
