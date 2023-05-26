let input = require("fs").readFileSync("example.txt").toString().trim();
let count = 0;
let len = input.length;

// 1부터 (len-1) 자리까지의 모든 자리수 개수를 계산
for (let i = 1; i < len; i++) {
  count += i * 9 * Math.pow(10, i - 1); // 각 자리수는 9개의 가능한 숫자 존재
}

// len 자리수의 개수를 계산
count += len * (input - Math.pow(10, len - 1) + 1);

console.log(count);

// *
// 메모리: 9332 KB
// 시간: 116 ms
// */
