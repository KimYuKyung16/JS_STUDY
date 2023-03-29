const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");
let [num, array] = input;
let arr = array.split(" ").map(Number);
let answer = 0;

for (let i = 0; i < num; i++) {
    isPrime(arr[i]) && answer++;
}
console.log(answer);

//에라토스테네스의 체
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
메모리: 9716 KB
시간: 172 ms
*/
