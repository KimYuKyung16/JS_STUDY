const fs = require('fs');
let input = fs.readFileSync("input.txt").toString().trim().split('\n')[1].split(' ');

let stack = [];
let answer = [];

let count = new Array(Math.max(...input)).fill(0);

for (let i=0; i<input.length; i++) { // 등장한 횟수들
  count[input[i]-1]++;
}

for (let i=input.length-1; i>=0; i--) {
  if (stack.length === 0) {
    stack.push([input[i], count[input[i]-1]]); // 값과 등장한 횟수를 함께 배열화해서 push 
    answer.push(-1);
  } else {
    while(true) {
      if (stack.length === 0) {
        answer.push(-1);
        stack.push([input[i], count[input[i]-1]]);
        break;
      }
      if (stack[stack.length-1][1] > count[Number(input[i])-1]) {
        answer.push(stack[stack.length-1][0]);
        stack.push([input[i], count[input[i]-1]]);
        break;
      } else {
        if (stack.length !== 0) stack.pop();
      }
    }
  }
}

console.log(answer.reverse().join(' '));

/*
메모리: 210148 KB
시간: 860 ms
*/