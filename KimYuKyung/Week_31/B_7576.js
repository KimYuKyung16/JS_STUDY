// 최소날짜를 구하는 것이기 때문에 bfs 사용
// 1인 애들의 좌표를 모두 넣어놓고 시작하기

const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');
input = input.map((x) => x.trim('\r'));

const [M, N] = input.shift().split(' ').map(Number);
const array = input.map((x) => x.split(' ').map(Number));
let visited = new Array(N).fill().map(() => new Array(M).fill(0));

let dx = [0, 0, 1, -1];
let dy = [1, -1, 0, 0];

let queue = [];

for (let y=0; y<N; y++) {
  for (let x=0; x<M; x++) {
    if (array[y][x] === 1) { // 익어있는 토마토의 경우를 queue에 넣기
      queue.push([y, x]);
      visited[y][x] = 1;
    } else if (array[y][x] === -1) { // 토마토가 없는 경우에는 방문 처리
      visited[y][x] = 1;
    }
  }
}

console.log(bfs());

function bfs() {
  let answer = 1;
  let q_index = 0;
  
  while(queue.length !== q_index) {
    let [y, x] = queue[q_index]; // queue.shift()하면 시간초과

    for (let i=0; i<4; i++) {
      let ny = y + dy[i];
      let nx = x + dx[i];

      if (ny > N-1 || ny < 0 || nx > M-1 || nx < 0) continue;
      if (visited[ny][nx]) continue;
      visited[ny][nx] = visited[y][x] + 1;
      queue.push([ny, nx]);
      answer = visited[ny][nx];
    }

    q_index++;
  }

  // 익을 수 없는 토마토 확인
  for (let y=0; y<N; y++) {
    for (let x=0; x<M; x++) {
      if (visited[y][x] === 0) return -1; 
    }
  }

  return answer-1;
}

/*
메모리: 160168 KB
시간: 696 ms
*/
