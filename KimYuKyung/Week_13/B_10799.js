const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim();

let stack = [];
let answer = 0;
let last;

for (let i=0; i<input.length; i++) {
  if (input[i] === '(') { 
    stack.push('(')
    last = '(';
  } else { // )일 경우
    if (last === ')') { // 마지막값이 )이면 한 막대기의 끝이기 때문에 pop하기
      answer ++;
      stack.pop();
    } else { // 마지막값이 (이면 레이저이기 때문에 pop한 후 스택에 있던 막대기 개수 더해주기
      stack.pop();
      answer += stack.length;
      last = ')';
    }
  }
}

console.log(answer);

/*
메모리: 11320 KB
시간: 228 ms
*/