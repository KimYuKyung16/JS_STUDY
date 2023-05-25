const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, M] = input[0].split(' ').map(Number);
input = input.map((x) => x.trim('\r'));

let array = [];
let answer = 0;

const direction = [ // y, x
  [1, 0], // 위
  [-1, 0], // 아래
  [0, 1], // 오른쪽
  [0, -1], // 왼쪽
]

let visited = Array.from({length: N}, () => new Array(M).fill(0));
for (let i=1; i<input.length; i++) {
  array.push(input[i].split(' ').map(Number));
}

for (let y=0; y<N; y++) {
  for (let x=0; x<M; x++) {
    let count = 0;
    let sum = 0;
    count++;
    visited[y][x] = 1;
    sum += array[y][x];
    dfs(y, x);
    visited[y][x] = 0;

    last_shape(y, x);

    function dfs(y, x) {
      for (let i=0; i<4; i++) {     
        if (count === 4) {
          answer = Math.max(answer, sum);
          return;
        }

        let new_y = y+direction[i][0];
        let new_x = x+direction[i][1];
        if (new_y < 0 || new_y >= N || new_x < 0 || new_x >= M) continue;
        if (visited[new_y][new_x] === 1) continue;

        count++;
        visited[new_y][new_x] = 1;
        sum += array[new_y][new_x];
        dfs(new_y, new_x);
        count--;
        visited[new_y][new_x] = 0;
        sum -= array[new_y][new_x];
      }  
    }

    function last_shape(y, x) {
      let direction = ['U', 'R', 'D', 'L'];

      for (let i=0; i<4; i++) {
        let sum = array[y][x];
        if (direction[i] === 'U') { // ㅗ 
          if (y-1 >= 0 && x-1 >= 0 && x+1 < M) {
            sum += (array[y-1][x] + array[y][x-1] + array[y][x+1]);
          }
        } else if (direction[i] === 'R') { // ㅏ
          if (x+1 < M && y-1 >= 0 && y+1 < N) {
            sum += (array[y][x+1] + array[y-1][x] + array[y+1][x]);
          }
        } else if (direction[i] === 'D') { // ㅜ
          if (y+1 < N && x-1 >= 0 && x+1 < M) {
            sum += (array[y+1][x] + array[y][x-1] + array[y][x+1])
          }
        } else { // ㅓ
          if (x-1 >= 0 && y-1 >= 0 && y+1 < N) {
            sum += (array[y][x-1] + array[y-1][x] + array[y+1][x]);
          }
        }

        answer = Math.max(answer, sum);
      }
    }
  }
}

console.log(answer);

/*
메모리: 24408 KB
시간: 656 ms
*/


/*
// 성공이긴한데 시간 좀 더 오래걸리는 코드

const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, M] = input[0].split(' ').map(Number);
input = input.map((x) => x.trim('\r'));

let array = [];
let answer = 0;

const direction = [ // y, x
  [1, 0], // 위
  [-1, 0], // 아래
  [0, 1], // 오른쪽
  [0, -1], // 왼쪽
]

let visited = Array.from({length: N}, () => new Array(M).fill(0));
for (let i=1; i<input.length; i++) {
  array.push(input[i].split(' ').map(Number));
}

for (let y=0; y<N; y++) {
  for (let x=0; x<M; x++) {
    let count = 0;
    let sum = 0;
    count++;
    visited[y][x] = 1;
    sum += array[y][x];
    dfs(y, x);
    visited[y][x] = 0;

    function dfs(y, x) {
      for (let i=0; i<4; i++) {     
        if (count === 3) {
          last_shape(y, x);
        }   
        if (count === 4) {
          answer = Math.max(answer, sum);
          return;
        }
        let new_y = y+direction[i][0];
        let new_x = x+direction[i][1];
        if (new_y < 0 || new_y > N-1 || new_x < 0 || new_x > M-1) continue;
        if (visited[new_y][new_x] === 1) continue;

        count++;
        visited[new_y][new_x] = 1;
        sum += array[new_y][new_x];

        dfs(new_y, new_x);
        count--;
        visited[new_y][new_x] = 0;
        sum -= array[new_y][new_x];

      }  
    }

    function last_shape(y, x) {
      for (let i=0; i<4; i++) {
        let new_y = y+direction[i][0];
        let new_x = x+direction[i][1];

        if (new_y < 0 || new_y > N-1 || new_x < 0 || new_x > M-1) continue;

        if (visited[new_y][new_x] === 1) {
          for (let i=0; i<4; i++) {
            let new_new_y = new_y + direction[i][0];
            let new_new_x = new_x + direction[i][1];

            if (new_new_y < 0 || new_new_y > N-1 || new_new_x < 0 || new_new_x > M-1) continue;

            if (visited[new_new_y][new_new_x] === 0) {
              answer = Math.max(answer, sum + array[new_new_y][new_new_x]);
              continue;
            }
          }
        }
      }
    }  
  }
}

console.log(answer);


메모리: 24616 KB
시간: 1292 ms
*/
