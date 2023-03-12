let input = require('fs').readFileSync('example.txt').toString().trim().split('');
let array = Array(26).fill(0);
for(let i=0;i<input.length;i++){
    let num = input[i].charCodeAt()-97; // 해당요소의 위치를 찾는다.
    array[num]++;       //찾아서 +1
}console.log(array.join(" "))

/*
메모리: 9340 KB
시간: 136 ms
*/