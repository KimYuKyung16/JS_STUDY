const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim();
array = input;
let stack = [];
let answer = "";
for (let i = 0; i < array.length; i++) {
    if (array[i].charCodeAt() >= 65 && array[i].charCodeAt() <= 90)
        stack.push(array[i]);
}
