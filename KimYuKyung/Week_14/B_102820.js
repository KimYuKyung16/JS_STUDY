const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\r\n');

let result = new Array(4).fill(0);
let answer = [];

for (let i=0; i<input.length; i++) {
  input[i].split('').forEach((x) => {
    if (x.match(/[a-z]/)) result[0]++;
    else if (x.match(/[A-Z]/)) result[1]++;
    else if (x.match(/[0-9]/)) result[2]++;
    else result[3]++;
  })

  answer.push(result.join(' '));
  result = new Array(4).fill(0);
}

console.log(answer.join('\n'));