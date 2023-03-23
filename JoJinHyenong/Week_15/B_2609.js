const input = require('fs').readFileSync('example.txt').toString().trim().split(' ');
const answer =[];
let max=[];
for(let i=0;i<=Math.min(Number(...input));i++){
    if(Number(input[0])%i===0&&Number(input[1])%i===0){
        max.push(i);
    }
}
answer.push(max[max.length-1]);
answer.push((input[0]*input[1])/answer) 
console.log(answer.join('\n'))

/*
메모리: 9604 KB
시간: 180 ms
*/