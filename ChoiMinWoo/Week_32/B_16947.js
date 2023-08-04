const fs = require("fs");
const arr = fs.readFileSync("dev/stdin").toString().trim().split("\r\n");
const N = +arr.shift();
console.log(arr);
