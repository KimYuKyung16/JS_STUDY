const fs = require('fs');
let [N, K] = fs.readFileSync('/dev/stdin').toString().trim('').split(' ');

N = Number(N); // 총원
K = Number(K); // 제거되는 사람 번호

let array = new Array(N).fill(0);
let answer = [];

for (let i=0; i<N; i++) { // 1 ~ N
  array[i] = i+1;
}

let i = 0; // array 배열 인덱스
let count = 1; // 몇 번째 사람인지

while (answer.length !== N) {
  if (i === N) i = 0;
  if (array[i] === 0) i++; // 이미 제거된 사람은 건너뛰기
  else { 
    if (count === K) { // 사람 제거
      answer.push(array[i]);
      array[i] = 0; // 0으로 초기화시켜서 사람 제거
      count = 1;
      i++;
    } else {
      count ++;
      i++;
    }
  }
}

console.log('<' + answer.join(', ') + '>');

/*
메모리: 10268 KB
시간: 756 ms
*/