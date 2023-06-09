const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');
input = input.map((x) => x.trim('\r'));
let [N, M] = input[0].split(' ').map(Number);
let numbers = input[1].split(' ').map(Number).sort((a,b) => a-b);
let answer = [];

let visited = new Array(Math.max(...numbers)+1).fill(0);

for (let i=0; i<numbers.length; i++) {
  if (visited[numbers[i]] === 1) continue;
  visited[numbers[i]] = 1;
  dfs([numbers[i]], 1, i);
  visited[numbers[i]] = 0;
}

function dfs(current, count, index) {
  if (count === M) {
    answer.push(current.join(' '));
  }

  for (let i=index+1; i<numbers.length; i++) {
    if (visited[numbers[i]] === 1) continue;
    let array = [...current, numbers[i]];
    visited[numbers[i]] = 1;
    dfs(array, count+1, i);
    visited[numbers[i]] = 0;
  }
}

console.log(answer.join('\n'));

/*
메모리: 9736 KB
시간: 120 ms
*/