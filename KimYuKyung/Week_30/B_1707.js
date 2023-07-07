const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');
input = input.map((x) => x.trim('\r'));

const K = +input[0];

for (let testcase=1; testcase<input.length; testcase++) {
  let [V, E] = input[testcase].split(' ').map(Number);
  let tree = new Array(V+1).fill().map(() => []);
  for (let count=testcase+1; count<=testcase+E; count++) {
    let [u, v] = input[count].split(' ').map(Number);
    tree[u].push(v);
    tree[v].push(u);
  }
  let answer = 'YES';
  let visited = new Array(V+1).fill(0);
  let queue = [];
  
  // visited에 들어있는 값을 이용해서 인접한지 안한지 판단 가능 (1과 2로 나눔).
  for (let i=1; i<=V; i++) {
    if (visited[i] !== 0) continue;
    visited = visited.fill(0);
    visited[i] = 1; // 제일 처음 값은 1로 설정해놓음.
    queue.push(i); // 처음 비교할 값 넣어줌.

    while(queue.length !== 0) {
      if (answer === 'NO') break; // NO면 while문 더 돌 필요없이 끝냄.
  
      let currentNum = queue.shift(); // 처음에 들어온 값부터 순서대로 빼서 비교
      for (let i=0; i<tree[currentNum].length; i++) {
        // visited값이 1 혹은 2인데 이전 visited값과 현재의 visited값이 같으면 인접한 것이기 때문에 이분 그래프의 조건에 해당하지않음.
        if (visited[tree[currentNum][i]] === visited[currentNum]) { 
          answer = 'NO';
          break;
        }
        if (visited[tree[currentNum][i]] !== 0) continue;
        visited[tree[currentNum][i]] = (visited[currentNum] === 1 ? 2 : 1); // 아직 값이 없을 경우에는 이전 값이랑 반대되는 값 넣어줌.
        queue.push(tree[currentNum][i]); // queue에 이번 인덱스에 해당하는 값들을 넣어줌.
      }
    }
  }

  console.log(answer);
  testcase += E;
}

/*
메모리: 172532 KB
시간: 2952 ms
*/