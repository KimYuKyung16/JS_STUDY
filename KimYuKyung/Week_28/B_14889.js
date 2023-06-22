const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');
input = input.map((x) => x.trim('\r'));

let answer = 2000;

const N = +input[0];
let array = [];
for (let i=1; i<input.length; i++) {
  array.push(input[i].split(' ').map(Number));
}

let visited = new Array(N).fill(0);

for (let i=0; i<array.length; i++) {
  visited[i] = 1;
  dfs(i+1, 1)
  visited[i] = 0;
}

function dfs(current, count) {
  if (count === N/2) {
    let left = 0;
    let right = 0;
    for (let y=0; y<N; y++) {
      for (let x=0; x<N; x++) {
        if (visited[x] && visited[y]) {
          left += array[x][y];
        } 
        if (!visited[x] && !visited[y]) {
          right += array[x][y];
        }
      }
    }
    answer = Math.min(answer, Math.abs(left-right));
  }
  
  for (let i=current; i<N; i++) {
    if (visited[i] === 1) continue;
    visited[i] = 1;
    dfs(i+1, count+1);
    visited[i] = 0;
  }
}

console.log(answer);

/*
메모리: 10376 KB
시간: 540 ms
*/