const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim();

let count = new Array(26).fill(0); // 소문자 26자리

for (let i=0;i<input.length; i++) {
  count[input[i].charCodeAt() -'a'.charCodeAt()]++; // 해당하는 값에 ++ , charCodeAt: 아스키코드
}

console.log(count.join(' '));

/*
메모리: 9340 KB
시간: 136 ms
*/