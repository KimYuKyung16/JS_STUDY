let input = require('fs').readFileSync('example.txt').toString().trim().split(' ');
const N = Number(input[0]);
const M = Number(input[1]);

function div5(n) {  //5의 개수를 구하는 방법
    let cnt = 0;
    for (let i = 5; i <= n; i *= 5) {
      cnt += Math.floor(n / i);
    }
    return cnt;
  }
  function div2(n) {        // 2의 개수를 구하는 방법
    let cnt = 0;
    for (let i = 2; i <= n; i *= 2) {
      cnt += Math.floor(n / i);
    }
    return cnt;
  }
const reuslt5 = div5(N) - div5(M) - div5(N - M);
const reuslt2 = div2(N) - div2(M) - div2(N - M);

console.log(Math.min(reuslt2, reuslt5));

/*
메모리: 9376 KB
시간: 172 ms
*/