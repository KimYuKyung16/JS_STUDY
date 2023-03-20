const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim();
let array = input.split("");

for (let i = 0; i < array.length; i++) {
    //대문자
    if (array[i].charCodeAt() >= 65 && array[i].charCodeAt() <= 90) {
        array[i] = String.fromCharCode(
            ((array[i].charCodeAt() - 65 + 13) % 26) + 65
        );
        //소문자
    } else if (array[i].charCodeAt() >= 97 && array[i].charCodeAt() <= 122) {
        array[i] = String.fromCharCode(
            ((array[i].charCodeAt() - 97 + 13) % 26) + 97
        );
    }
}
console.log(array.join(""));
/*
메모리: 9340 KB
시간: 132 ms
*/
