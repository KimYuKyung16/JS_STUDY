let input = require('fs').readFileSync('example.txt').toString().split("\n");
const len = Number(input[0]);     //6
input.shift();
input = input[0].split(" ").map((item) => Number(item));
const dp = new Array(len).fill(1);
dp[0] = input[0];
for(let i=1;i<len;i++){
    for(let j=0;j<i;j++){
        dp[i] = dp[j]<input[i]?input[i]:1;      //i번째 이전에 있는 dp의 값들과 input의 i번째 값을 비교
    }
}
let answer = dp.filter(item => item!=1)
console.log(answer.length);
console.log(answer.join(' '));