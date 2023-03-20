const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim();
let arr = input.split(" ");
console.log(parseInt(arr[0] + arr[1]) + parseInt(arr[2] + arr[3]));

/*
메모리: 9612 KB
시간: 132 ms
*/
