let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.map((item) => item.trim('\r'));

let nums = [];
for (let i=1; i<input.length; i++) {
  nums.push(+input[i]);
}
solution(nums);


function solution(nums) {
  let answer = [];
  let stack = [];
  let lastnum = 1; // 스택에 넣으려는 숫자
 
  for(let i=0; i<nums.length; i++) {
    if (nums[i] >= lastnum) { // 비교중인 수열 값이 더 크다면 push를 진행
      while (lastnum !== nums[i]+1) { // 수열 값과 스택 값이 같지 않으면 계속 push
        stack.push(lastnum);
        answer.push('+');
        lastnum++;
      }
      stack.pop(); // 수열 값과 스택값이 같아지면 그때는 pop해주기
      answer.push('-');
    } else { // 비교 중인 수열 값이 더 작으면 pop을 진행
      if (nums[i] === stack[stack.length-1]) { // 스택 마지막 값이랑 같다면 pop
        stack.pop();
        answer.push('-'); 
      } else { // 스택 마지막 값이랑 다르면 성립이 안됨.
        answer = ['NO'];
        break;
      }
    }
  }

  console.log(answer.join('\n'));
}

/*
메모리: 36352 KB
시간: 272 ms
*/