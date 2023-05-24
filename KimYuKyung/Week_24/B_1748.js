/*
1~9 -> 자리수: 1 -> 총 9개
10~99 -> 자리수: 2 -> 총 90개
100~999 -> 자리수: 3 -> 총 900개
1000~9999 -> 자리수: 4 -> 총 9000개
.
.
.
*/

const fs = require('fs');
let N = fs.readFileSync('input.txt').toString().trim();
let answer = 0; // 총 개수
let count = '9';

for (let i=0; i<N.length; i++) { // i는 자리수, count는 자리수에 해당하는 값의 총 개수
  answer += (Number(count) * (i+1)); 
  if (i !== N.length-1) count += '0';
}

let init = +count / 9; // 특정 자리수에 해당하는 값 중에 제일 첫번째 값
let remain = N - init + 1; // 제일 마지막 자리수에 해당하는 값의 개수
answer = answer - ((+count - remain) * count.length); 

console.log(answer);

/*
메모리: 9328 KB
시간: 120 ms
*/