const input = require('fs').readFileSync('example.txt').toString().trim().split(" ");
let answer = 1;
for(let i=1;i<=Number(input[0]);i++){
    answer *=i;
}
console.log(answer)

/*
메모리: 9592 KB
시간: 120 ms
*/