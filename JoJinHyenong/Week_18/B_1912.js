const input = require('fs').readFileSync('example.txt').toString().split("\n");
// const len = input.shift();
// let array = input[0].split(' ').map((item)=>Number(item));
// //console.log(array.slice(0,1).reduce((a,b)=>a+b))
// let answer=0;
// for(let i=0;i<len;i++){
//     for(let j=1;j<array.length;j++){
//         answer<=array.slice(i,j).reduce((a,b)=>a+b)?answer=array.slice(i,j).reduce((a,b)=>a+b):answer=answer;
//     }
// }console.log(answer)
const len = Number(input[0]);
let array = input[1].split(' ').map(item=>Number(item));
let dp = [array[0]];    // 직전값들의 합 넣는 곳
for(let i=1;i<len;i++){
    dp[i] = array[i]>array[i]+dp[i-1]?array[i]:array[i]+dp[i-1];    //직전까지의 부분합이 현재 값 보다 큰지 아닌지 확인
}
console.log(Math.max(...dp));

// *
// 메모리: 16276 KB
// 시간: 204 ms
// */