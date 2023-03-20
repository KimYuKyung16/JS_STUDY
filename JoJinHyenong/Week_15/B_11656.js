const input = require('fs').readFileSync('example.txt').toString().trim().split('');
let answer=[];
for(let i=0;i<input.length;i++){
   answer.push(input.slice(-i).join(""));
}
let x = answer.sort((a,b)=>a.localeCompare(b));
console.log(...x)

/*
메모리: 13432 KB
시간: 164 ms
*/