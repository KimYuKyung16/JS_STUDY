let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.map((item) => item.trim("\r"));

let parenthesis = [];
for (let i=1; i<input.length; i++) {
  parenthesis.push(input[i]);
}

solution(parenthesis);

function solution(parenthesis) {
  let answer = [];
  for (let i=0; i<parenthesis.length; i++) {
    answer.push(parenthesisCheck(parenthesis[i]));
  }

  console.log(answer.join('\n'));
}

function parenthesisCheck(parenthesis) {
  let stack = [];

  for (x of parenthesis) {
    if (x === '(') stack.push('('); // 왼쪽 괄호일 때는 비교할 필요 없으니 무조건 push
    else {
      if (stack[stack.length-1] === '(') stack.pop(); // 스택 마지막 값이 (이면 yes
      else continue;
    } 
  }

  return stack.length ? 'NO' : 'YES';
}

/*
메모리: 9472 KB
시간: 128 ms
*/