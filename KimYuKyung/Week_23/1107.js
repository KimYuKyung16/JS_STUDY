// 실패

const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');

const n = input[0].trim();
const m = +input[1];

let available_btn = [];
let currentNum = ['', '']; // 0: 더 작은 값, 1: 더 큰 값
let broken_btn = [];

if (m !== 0) {
  broken_btn = input[2].split(' ').map(Number);
}

if (+n === 100) {
  console.log(0);
} else {
   // 사용가능한 버튼만 추리기
  for (let i=0; i<=9; i++) { 
    if (!broken_btn.includes(i)) available_btn.push(i); 
  }

  for (let i=0; i<n.length; i++) {
    if (available_btn.includes(n[i])) {
      currentNum[0] += n[i];
      currentNum[1] += n[i];
    } else {
      let max = Number(currentNum[1] + String(+n[i]));
      for (let j=(+n[i]); j>=0; j--) { // 더 작은 값 중에 비교
        if (available_btn.includes(j)) {
          currentNum[0] += String(j);
          break;
        }
      }
      currentNum[0] += String(max);

      let max2 = Number(currentNum[1] + String(+n[i]));
      for (let j=(+n[i]); j<=9; j++) { // 더 큰 값 중에 비교
        if (available_btn.includes(j)) {
          middle = Number(currentNum[1] + String(j));
          console.log('middle2:', middle)
          if (Number(n.slice(0, i)) - middle > Number(n.slice(0, i)) - max) {
            max = middle;
          }
        }
      }
      currentNum[1] += String(max2);
      if (+n[i] === 0) currentNum[0] += String(max2)
    }
  }

  console.log(currentNum)

  console.log(n.length + Math.min(Math.abs(+n - currentNum[0]), Math.abs(+n - currentNum[1])));
}