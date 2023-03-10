const fs = require('fs');
let input = fs.readFileSync("input.txt").toString().trim().split('\n')[1].split(' ');

let answer = [];
let stack = [];

for (let i=input.length-1; i>=0; i--) {
  if (stack.length === 0) {
    answer.push(-1);
    stack.push(input[i]);
  } else {
    while(1) {
      if (stack[stack.length-1] > Number(input[i])) { // 스택 마지막값이 input값보다 클 경우
        answer.push(stack[stack.length-1]);
        stack.push(input[i]);
        break;
      } else { // 스택 마지막값이 input값보다 작을 경우
        if (stack.length === 0) { // 스택에 값이 없으면 전부다 오큰수가 될 수 없기 때문에 -1
          answer.push(-1);
          stack.push(input[i]); // 다음 연산을 위해 현재 값만 stack에 push
          break;
        } else stack.pop(); // 스택 마지막값이 더 작기 때문에 앞으로 오큰수가 될 일 X, 따라서 pop
      }
    }
  }
}

console.log(answer.reverse().join(' '));

/*
메모리: 197232 KB
시간: 852 ms
*/