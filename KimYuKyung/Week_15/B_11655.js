const fs = require('fs');
let input = fs.readFileSync('input.txt').toString();


let result = input.split('').map((x) => {
  for (let i=0; i<input.length; i++) {
    if (/[a-zA-Z]/.test(x)) { // 영문자일 경우
      if (/[a-z]/.test(x)) return String.fromCharCode(97 + (x.charCodeAt()-97+13)%26); // 아스키코드에 13 더한 값
      else return String.fromCharCode(65 + (x.charCodeAt()-65+13)%26);
    } else return x
  }
})

console.log(result.join(''));

/*
메모리: 9344 KB
시간: 132 ms
*/