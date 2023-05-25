const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');
input = input.map((x) => x.trim('\r'));

for (let i=1; i<input.length; i++) {
  let answer = 0;
  let [M, N, x, y] = input[i].split(' ').map(Number);
  for (let i=x; i<=getLCM(M, N); i+=M) {
    if ((i-1) % N + 1 === y) {
      answer = i;
      break;
    }
  }

  console.log(answer ? answer : -1);
}

function getLCM(x, y) { // 최소공배수
  let bigNum = Math.max(x, y);
  let smallNum = Math.min(x, y);
  for (let i=bigNum; i<=bigNum*smallNum; i+=bigNum) {
    if (i%bigNum === 0 && i%smallNum === 0) {
      return i;
    }
  }
}

