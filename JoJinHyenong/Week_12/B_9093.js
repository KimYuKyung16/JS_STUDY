const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const len = Number(input[0]);   // 현재 input에 있는 2가 문자라서 숫자로 변경

for(let i=1;i<=len;i++){
  let answer='';
  for(let j=0;j<input[i].split(' ').length;j++){
    answer += `${input[i].split(' ')[j].split('').reverse().join('')} `;
  }
  console.log(answer);
}

/*
메모리: 17660 KB
시간: 1264 ms
*/