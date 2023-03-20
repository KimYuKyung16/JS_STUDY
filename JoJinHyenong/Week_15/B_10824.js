let input = require('fs').readFileSync('example.txt').toString().trim().split(' ');
const x = input[0] + input[1];
const y = input[2] + input[3];
console.log(Number(x)+Number(y));

/*
메모리: 9604 KB
시간: 128 ms
*/
