let input = require('fs').readFileSync('example.txt').toString().trim().split('');

var a = []
for(var i=97;i<123;i++){
    a += input.indexOf(String.fromCharCode(i))+' '
}
console.log(a);

/*
메모리: 9344 KB
시간: 204 ms
*/