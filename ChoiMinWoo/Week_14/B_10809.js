const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim();
//0으로 초기화
let array = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
    //array에 값이 있으면 그대로 없으면 index 값을 넣어줌(같은 문자 여러개 일 때 문제)
    array[input[i].charCodeAt() % 97] = array[input[i].charCodeAt() % 97] || i;
}

//array에 0인 것들 -1로 변경
array = array.map((a) => (a === 0 ? (a = -1) : a));
//0번째로 나오는 문자도 -1로 변경되므로 0으로 변경
array[input.charCodeAt(0) % 97] = 0;
console.log(...array);
/*
메모리: 9372 KB
시간: 140 ms
*/
