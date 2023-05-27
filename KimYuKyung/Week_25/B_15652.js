const fs = require('fs');
let [N, M] = fs.readFileSync('input.txt').toString().trim().split(' ').map(Number);

let answer = [];

dfs([], 0);

function dfs(array, count) {
  if (count === M) {
    answer.push(array.join(' '));
    return;
  }
  for (let i=1; i<=N; i++) {
    let narray = [...array];

    if (i < narray[narray.length-1]) continue;
    narray.push(i);

    dfs(narray, count+1);
  }
}

console.log(answer.join('\n'));

/*
메모리: 12072 KB
시간: 192 ms
*/
