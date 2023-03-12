let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
let arr = [...input[1].split(" ")];
arr = arr.map(x=>x=Number(x));
const res = Array(Number(input[0])).fill(-1);
const stack = [];

for (let i = 0; i < arr.length; i++) {
  while (stack.length > 0 && stack[stack.length - 1][0] < arr[i]) { //stack에 있는 마지막 요소와 arr비교 (예 3,5비교)
    const [value, idx] = stack.pop();
    res[idx] = arr[i];
  }
  stack.push([arr[i], i]);
}
console.log(res.join(' '));

/*
메모리: 273948 KB
시간: 904 ms
*/