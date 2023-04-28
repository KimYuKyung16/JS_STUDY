const input = require('fs').readFileSync('example.txt').toString().split("\n").map((item)=>Number(item));
var cases = Number(input[0]);   //3
input.shift();                     //[4,7,10]
var max = Math.max(...input);       //10
var arr = [[0,0,0], [1,0,0], [0,1,0], [1,1,1]]; // 마지막 수가 1,2,3 별로 몇개있는지 확인
for(var i=4; i<=max; i++){
    arr[i] = [(arr[i-1][1] + arr[i-1][2]) % 1000000009, (arr[i-2][0] + arr[i-2][2]) % 1000000009, (arr[i-3][0] + arr[i-3][1]) % 1000000009];
} 
for(var k=0; k<cases; k++){
    console.log(arr[input[k]].reduce((a,v)=> a+v, 0) % 1000000009);
}

// *
// 메모리: 29988 KB
// 시간: 404 ms
// */