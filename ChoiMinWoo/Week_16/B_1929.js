const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim();
let [a, b] = input.split(" ").map(Number);
let answer = [];

for (let i = a; i <= b; i++) {
    isPrime(i) && answer.push(i);
}
console.log(answer.join("\n"));

function isPrime(number) {
    if (number === 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
/*
메모리: 17372 KB
시간: 528 ms
*/
