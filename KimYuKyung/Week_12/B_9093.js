let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.map((item) => item.trim("\r"));

let testcase = [];

for (let i=1; i<input.length; i++) {
  testcase.push(input[i]);
}

solution(testcase);

function solution(testcase) {
  for (let i=0; i<testcase.length; i++) {
    testcase[i] = testcase[i].split(' ').map((x) => { // 단어 한 개씩 가져와서
      return x.split('').reverse().join(''); // 뒤집은 후 합치기
    }).join(' ')
  }

  console.log(testcase.join('\n'));
}

/*
메모리: 25692 KB
시간: 308 ms 
*/