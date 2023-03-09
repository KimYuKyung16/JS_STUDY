let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.map((item) => item.trim('\r'));

let string = input[0];
let commands = [];

for (let i=2; i<input.length; i++) {
  commands.push(input[i]);
}

solution(string, commands);


function solution(string, commands) {
  let string1 = [...string]; // 커서의 왼쪽 영역: 처음에 커서는 맨 뒤에 있음.
  let string2 = []; // 커서의 오른쪽 영역

  for (let i=0; i<commands.length; i++) {
    if (commands[i] === 'L') {  // 커서를 왼쪽으로 한 칸 옮김.
      if (string1.length) string2.push(string1.pop()); //왼쪽 영역에서 하나를 뺴서 오른쪽 영역에 추가
    } else if (commands[i] === 'D') { // 커서를 오른쪽으로 한 칸 옮김.
      if (string2.length) string1.push(string2.pop()); //오른쪽 영역에서 하나를 뺴서 왼쪽 영역에 추가
    } else if (commands[i] === 'B') { // 왼쪽에 있는 문자 삭제
      if (string1.length) string1.pop(); // 왼쪽 영역에서 하나 pop
    } else { // P $ 일 경우: $ 커서 왼쪽에 추가
      let [x, y] = commands[i].split(' ');
      string1.push(y); // 왼쪽 영역에 값 추가
    }
  }

  console.log(string1.join('') + string2.reverse().join(''));
}

/*
메모리: 119764 KB
시간: 556 ms
*/