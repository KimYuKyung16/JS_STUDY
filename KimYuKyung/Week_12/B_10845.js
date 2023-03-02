let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.map((item) => item.trim("\r"));

let commands = [];

for (let i=1; i<input.length; i++) {
  commands.push(input[i]);
}

solution(commands);

function solution(commands) {
  let answer = [];
  let queue = [];

  for (let i=0; i<commands.length; i++) {
    if (commands[i] === 'pop') answer.push(queue.length ? queue.splice(0, 1) : -1); // 가장 앞에 있는 정수 빼기
    else if (commands[i] === 'size') answer.push(queue.length); // 총 정수 개수
    else if (commands[i] === 'empty') answer.push(queue.length ? 0 : 1); // 비어있으면 1, 아니면 0
    else if (commands[i] === 'front') answer.push(queue.length ? queue[0] : -1); // 가장 앞에 있는 정수 출력 
    else if (commands[i] === 'back') answer.push(queue.length ? queue[queue.length-1] : -1); // 가장 뒤에 있는 정수 출력
    else { // push X 일 경우
      let [x, y] = commands[i].split(' '); // push , X 로 나누기
      queue.push(y);
    }
  }

  console.log(answer.join('\n'));
}

/*
메모리: 12764 KB
시간: 200 ms
*/