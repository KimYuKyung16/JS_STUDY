const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('<');

let answer = '';

for (let i=0; i<input.length; i++) {
  if (input[i].split('').includes('>')) {
    let [left, right] = input[i].split('>');
    answer += ('<'+left +'>'); 
    answer += right.split(' ').map((x) => {
      return x.split('').reverse().join('')
    }).join(' ');
  } else {
    answer += input[i].split(' ').map((x) => {
       return x.split('').reverse().join('')
    }).join(' ');
  }
}

console.log(answer);

/*
메모리: 15216 KB
시간: 196 ms
*/