let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.map((item) => item.trim("\r"));

const N = +input[0];
let commands = [];

for (let i=1; i<input.length; i++) {
  commands.push(input[i]);
}

solution(N, commands);

function solution(N, commands) {
  let answer = [];
  let stack = [];

  for (let i=0; i<N; i++) {
    if (commands[i] === 'pop') { // 가장 끝 값 제거
      stack.length? answer.push(stack.pop()) : answer.push(-1) 
    } else if (commands[i] === 'size') answer.push(stack.length); // 정수의 총개수
    else if (commands[i] === 'empty') { // 비어있으면 1, 아니면 0
      stack.length ? answer.push(0) : answer.push(1)
    } else if (commands[i] === 'top') { // 가장 끝 값 출력
      stack.length ? answer.push(stack[stack.length-1]) : answer.push(-1) 
    } else { // push X일 경우: X를 스택에 추가
      let [x, y] = commands[i].split(' ');
      stack.push(y);
    }
  }

  answer = answer.join('\n');
  console.log(answer);
}

/*
메모리: 12600 KB
시간: 192 ms
*/