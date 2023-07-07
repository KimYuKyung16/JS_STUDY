const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');
input = input.map((x) => x.trim('\r'));

let answer = [0, 9999999999];

const k = +input[0];
let sign = input[1].split(' ');

let visited = new Array(10).fill(0);

function dfs(index, array) {
  if (array.length === sign.length+1) {
    answer[0] = Math.max(answer[0], Number(array.join(''))) === +answer[0] ? answer[0] : array.join('');
    answer[1] = Math.min(answer[1], Number(array.join(''))) === +answer[1] ? answer[1] : array.join('');
    return;
  }

  for (let i=0; i<10; i++) {
    if (visited[i]) continue;

    if (sign[index] === '<') {
      if (array[array.length-1] < i) {
        visited[i] = 1;
        dfs(index+1, [...array, i]);
        visited[i] = 0;
      }
    } else {
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