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
  
  for (let i=1; i<=V; i++) {
    if (visited[i] !== 0) continue;
    visited = visited.fill(0);
    visited[i] = 1;
    queue.push(i);

    while(queue.length !== 0) {
      if (answer === 'NO') break;
  
      let currentNum = queue.shift();
      for (let i=0; i<tree[currentNum].length; i++) {
        if (visited[tree[currentNum][i]] === visited[currentNum]) {
          answer = 'NO';
          break;
        }
        if (visited[tree[currentNum][i]] !== 0) continue;
        visited[tree[currentNum][i]] = (visited[currentNum] === 1 ? 2 : 1); 
        queue.push(tree[currentNum][i]);
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