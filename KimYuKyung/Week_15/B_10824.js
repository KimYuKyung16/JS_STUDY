const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split(' ');

console.log(Number(input[0]+input[1]) + Number(input[2]+input[3]));

/*
메모리: 9588 KB
시간: 128 ms
*/