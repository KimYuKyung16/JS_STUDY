const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim();
let array = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
    array[input[i].charCodeAt() % 97]++;
}
console.log(...array);

/*
메모리: 9364 KB
시간: 144 ms
*/
