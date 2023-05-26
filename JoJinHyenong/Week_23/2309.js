let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((x) => Number(x));
//console.log(input);
let sum = input.reduce((a, b) => a + b); //합을 구한다.
for (let i = 0; i < input.length; i++) {
  for (let j = i + 1; j < input.length; j++) {
    if (sum - (input[i] + input[j]) === 100) {
      //합이 100이 되는 i와 j를 찾는다.
      input.splice(input.indexOf(input[i]), 1); // 하나씩 제거해준다.
      input.splice(input.indexOf(input[j]) - 1, 1); // j는 i보다 뒤에 있기때문에 index번호를 -1을 해준다.
    }
  }
}
input.sort((a, b) => a - b);
for (let i = 0; i < input.length; i++) {
  console.log(input[i]);
}
