const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim();
let arr = input.split(" ").map(Number);
let answer = "";
let a = arr[0];
let b = arr[1];
let c = arr[2];

answer += ((a + b) % c) + "\n";
answer += (((a % c) + (b % c)) % c) + "\n";
answer += ((a * b) % c) + "\n";
answer += (((a % c) * (b % c)) % c) + "\n";
console.log(answer.trim());
/*
메모리: 9576 KB
시간: 124 ms
*/
