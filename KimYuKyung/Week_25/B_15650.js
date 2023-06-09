const fs = require('fs');
let [N, M] = fs.readFileSync('input.txt').toString().trim().split(' ').map(Number);

let answer = [];
let visited = new Array(N+1).fill(0);

dfs([], 0);

function dfs(array, count) {
  if (count === M) {
    answer.push(array.join(' '));
    return;
  }
  for (let i=1; i<=N; i++) {
    if (visited[i] === 0) {
      let narray = [...array];
      if (i < narray[narray.length-1]) continue; // 오름차순 만들기 위해 왼쪽 값이 더 작을 경우 제외
      narray.push(i);

      visited[i] = 1;
      dfs(narray, count+1);
      visited[i] = 0;
    }
  }
}

console.log(answer.join('\n'));

/*
메모리: 9448 KB
시간: 120 ms
*/