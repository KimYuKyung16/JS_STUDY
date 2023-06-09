const fs = require('fs');
let [N, M] = fs.readFileSync('input.txt').toString().trim().split(' ').map(Number);

let answer = [];

dfs([], 0);

// 같은 수를 중복으로 고를 수 있기 때문에 방문 처리 제거
function dfs(array, count) {
  if (count === M) {
    answer.push(array.join(' '));
    return;
  }
  for (let i=1; i<=N; i++) {
    let narray = [...array];
    narray.push(i);

    dfs(narray, count+1);
  }
}

console.log(answer.join('\n'));

/*
메모리: 151744 KB
시간: 968 ms
*/