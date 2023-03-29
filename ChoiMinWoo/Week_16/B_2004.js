const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split(" ").map(Number);
let n = input[0];
let m = input[1];

//2의 배수와 5의 배수의 개수를 이용하는 방법
function getPowerN(num, power) {
    let count = 0;

    while (num >= power) {
        count += parseInt(num / power);
        num /= power;
    }

    return count;
}

const two = getPowerN(n, 2) - getPowerN(n - m, 2) - getPowerN(m, 2);
const five = getPowerN(n, 5) - getPowerN(n - m, 5) - getPowerN(m, 5);

console.log(Math.min(two, five));
/*
메모리: 10444 KB
시간: 168 ms
*/
