const fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\r\n");
let [num, ...arr] = input;
let answer = [];

function gcd(a, b) {
  if (b == 0) return a;
  return a > b ? gcd(b, a % b) : gcd(a, b % a);
}

const getLCM = (a, b) => {
  return (a * b) / gcd(a, b);
};

for (let i = 0; i < num; i++) {
  let test_case = arr[i].split(" ").map(Number);
  let m = test_case[0];
  let n = test_case[1];
  let x = test_case[2];
  let y = test_case[3];
  let a = 0;
  let answer = -1;
  let lcm = getLCM(m, n);

  while (a * m < lcm) {
    a++;
  }
  answer.push(answer);
}
console.log(answer);
