// 실패

const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');

const n = +input[0];

let count = {};
let answer = 1;

function compare(r, c) {
  let temp = input[r+1][r];
  input[r+1][r] = input[r+2][r];
  input[r+2][r] = temp;
  
  for (let i=0; i<n; i++) { // 행 비교
    let count = 1;
    let max = 1;
    for (let j=0; j<n-1; j++) {
      if (input[i][j] === input[i][j+1]) {
        count++;
      } else {
        count = 1;
        max = Math.max(count, max);
      }
    }
    answer = Math.max(answer, max);
  }

  for (let i=0; i<n; i++) { // 열 비교
    let count = 1;
    let max = 1;
    for (let j=0; j<n-1; j++) {
      if (input[i][j] === input[j+1][i]) {
        count++;
      } else {
        count = 1;
        max = Math.max(count, max);
      }
    }
    answer = Math.max(answer, max);
  }

  console.log(answer);

}

compare(0,0);