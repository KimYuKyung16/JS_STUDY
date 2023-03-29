const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim();
//큰수 계산을 위한 BigInt
let f = BigInt(1);
for (let i = input; i > 0; i--) {
    f *= BigInt(i);
}

//뒤에서 부터 읽기 위해 배열 뒤집기
let num = f.toString().split("").reverse().map(Number);
let count = 0;

for (let i = 0; i < num.length; i++) {
    if (num[i] === 0) count++;
    else break;
}

console.log(count);
/*
메모리: 9500 KB
시간: 132 ms
*/
