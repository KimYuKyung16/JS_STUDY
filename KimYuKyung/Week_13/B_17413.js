const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('<');

let answer = '';

for (let i=0; i<input.length; i++) {
  if (input[i].split('').includes('>')) { // '>'값이 들어있을 경우에는 이 문자를 기준으로 왼쪽 오른쪽으로 나누기
    let [left, right] = input[i].split('>');
    answer += ('<'+left +'>'); // left에는 <> 사이에 들어가는 문자열이 있음.
    answer += right.split(' ').map((x) => { // 오른쪽 값에는 <> 밖에 있는 문자열이 있음.
      return x.split('').reverse().join('')
    }).join(' ');
  } else {
    answer += input[i].split(' ').map((x) => { // '>'값이 없다면 공백 기준으로 나눈 후 해결
       return x.split('').reverse().join('')
    }).join(' ');
  }
}

console.log(answer);

/*
메모리: 15216 KB
시간: 196 ms
*/