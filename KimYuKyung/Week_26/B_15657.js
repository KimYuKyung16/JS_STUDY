const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');
input = input.map((x) => x.trim('\r'));
let [N, M] = input[0].split(' ').map(Number);
let numbers = input[1].split(' ').map(Number).sort((a,b) => a-b);
let answer = [];

for (let i=0; i<numbers.length; i++) {
  dfs([numbers[i]], 1, i);
}

function dfs(current, count, index) {
  if (count === M) {
    answer.push(current.join(' '));
    return;
  }
  for (let i=index; i<numbers.length; i++) {
    let array = [...current, numbers[i]];
    dfs(array, count+1, i);
  }
}

console.log(answer.join('\n'));

/*
메모리: 13036 KB
시간: 184 ms
*/