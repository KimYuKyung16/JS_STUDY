const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");
const [num, ...arr] = input;

arr.forEach((a) =>
    // 배열로 만들고 reverse하여 각각의 단어를 뒤집고 다시 문자열로 바꾼 후
    // 다시 " "를 기준으로 배열을 만들고 뒤집은 후
    // 문장을 " "기준으로 뒤집은 후 다시 문자열로 만듬
    console.log(a.split(" ").reverse().join("").split(" ").reverse().join(" "))
);
