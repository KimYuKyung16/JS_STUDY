const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');
input = input.map((x) => x.trim('\r'));

/*
현재 카잉 달력의 x값은 실제 해가 M의 배수(0 포함) + x 중 하나라는 뜻이다. 
그렇다면 M의 배수 + x인 해 중에서 y가 현재 y값으로 나오는 해를 찾으면 된다. 
그러려면 x에 M을 계속 더해가면서 그 값을 N으로 나누었을 때 나머지가 y가 되는 값을 찾으면 된다. 
이 때, y = N이라면 N의 나머지와 비교했을 때 0 != N이 되어 값을 찾지 못하게 된다. 
따라서, (M의 배수 + x)를 N으로 나눈 나머지에 1을 더한 값이 현재 y값과 같을 때의 (M의 배수 + x)를 찾아야 한다.
*/

for (let i=1; i<input.length; i++) {
  let answer = 0;
  let [M, N, x, y] = input[i].split(' ').map(Number);
  for (let i=x; i<=getLCM(M, N); i+=M) { // 두 수의 최소공배수일 때 종말
    if ((i-1) % N + 1 === y) { // 
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

