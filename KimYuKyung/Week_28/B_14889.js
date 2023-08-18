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

function dfs(current, count) { // current: 비교를 시작할 부분, count: 팀원 수
  if (count === N/2) { // 한쪽 팀이 다 완성된 경우
    let left = 0; // 스타트팀
    let right = 0; // 링크팀
    for (let y=0; y<N; y++) { // array값 모두 돌면서 일치하는 능력치 더하기
      for (let x=0; x<N; x++) {
        if (visited[x] && visited[y]) { // 둘 다 방문한 곳은 스타트팀: left에 능력치 +
          left += array[x][y];
        } 
        if (!visited[x] && !visited[y]) { // 둘 다 방문안했으면 링크팀: right에 능력치 +
          right += array[x][y];
        }
      }
    }
    answer = Math.min(answer, Math.abs(left-right)); // 차이가 최소인 경우 구하기
    // return;
  }
  
  for (let i=current; i<N; i++) {
    if (visited[i] === 1) continue;
    visited[i] = 1;
    dfs(i+1, count+1); // i+1을 하는 이유: i가 이미 팀에 선정됐기 때문
    visited[i] = 0;
  }
}

console.log(answer);

/*
메모리: 10376 KB
시간: 540 ms
*/