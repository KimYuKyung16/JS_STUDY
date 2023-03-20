const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");
let num = input.shift();

for (let i = 0; i < num; i++) {
    let arr = input[i].split(" ").map(Number);
    let a = arr[0];
    let b = arr[1];
    console.log(fun(a, b));
}

//최소 공배수
function fun(a, b) {
    for (let i = a; i <= b * a; i += a) {
        if (i % b === 0) {
            return i;
        }
    }
}
/*
메모리: 11852 KB
시간: 592 ms
*/
