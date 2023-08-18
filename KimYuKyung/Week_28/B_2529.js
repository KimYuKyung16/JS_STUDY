const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');
input = input.map((x) => x.trim('\r'));

let answer = [0, 9999999999]; // 최대값, 최소값

const k = +input[0];
let sign = input[1].split(' '); // 부등호

let visited = new Array(10).fill(0);

function dfs(index, array) { // index: 몇번째 부등호인지 알려주는 인덱스, array: 현재까지 들어있는 숫자목록
  if (array.length === sign.length+1) { // 숫자들의 개수가 부등호개수+1 과 같다면
    // 최대값 비교
    answer[0] = Math.max(answer[0], Number(array.join(''))) === +answer[0] ? answer[0] : array.join('');
    // 최소값 비교
    answer[1] = Math.min(answer[1], Number(array.join(''))) === +answer[1] ? answer[1] : array.join('');
    return;
  }

  for (let i=0; i<10; i++) {
    if (visited[i]) continue;

    if (sign[index] === '<') { 
      // 현재 array에 넣으려는 값이 array에 들어있는 마지막 값보다 작으면 '<' 부등호 만족
      if (array[array.length-1] < i) { 
        visited[i] = 1;
        dfs(index+1, [...array, i]);
        visited[i] = 0;
      }
    } else { // 현재 array에 넣으려는 값이 array에 들어있는 마지막 값보다 크면 '>' 부등호 만족
      if (array[array.length-1] > i) {
        visited[i] = 1;
        dfs(index+1, [...array, i]);
        visited[i] = 0;
      }
    }
  }
}

for (let i=0; i<10; i++) {
  visited[i] = 1;
  dfs(0, [i]);
  visited[i] = 0;
}

console.log(answer[0]);
console.log(answer[1]);

/*
메모리: 14396 KB
시간: 340 ms
*/