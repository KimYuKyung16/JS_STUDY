const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');
input = input.map((x) => x.trim('\r'));

let expression = input[1];
expression = expression.split('');

let stack = [];
let nums = {}; // ex) {A: 1}
let numIndex = 2; // 영문자와 해당하는 값을 찾기 위해 필요

for (let i=0; i<expression.length; i++) {
  if (/[A-Z]/.test(expression[i])) { // 영문자일 경우
    if (nums[expression[i]] === undefined) { // 객체에 값 없을 경우
      nums[expression[i]] = input[numIndex]; 
      stack.push(Number(input[numIndex])); // 객체에 값 넣기
      numIndex++;
    } else { // 값 있을 경우
      stack.push(Number(nums[expression[i]])); // 객체에서 해당 값 찾아서 PUSH
    }
  } else { // 영문자가 아닐 경우 : 연산자
    let second = stack.pop();
    let first = stack.pop();
    if (expression[i] === '+') stack.push(first + second);
    else if (expression[i] === '-') stack.push(first - second);
    else if (expression[i] === '*') stack.push(first * second);
    else stack.push(first / second);
  }
}

console.log((stack.pop() * 100 / 100).toFixed(2));

/*
메모리: 9328 KB
시간: 116 ms
*/