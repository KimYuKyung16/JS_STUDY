const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim()
input = input.split(' ').map(Number);

// 지구 범위: 1 <= E <= 15
// 태양 범위: 1 <= S <= 28
// 달 범위: 1 <= M <= 19 
let [E, S, M] = [1, 1, 1]; // 지구, 태양, 달
let year = 1;

while(1) {
  if (E === input[0] && S === input[1] && M === input[2]) break;

  year++;

  if (E <= 14) E++;
  else E = 1;
  
  if (S <= 27) S++;
  else S = 1;

  if (M <= 18) M++;
  else M = 1;
}

console.log(year);