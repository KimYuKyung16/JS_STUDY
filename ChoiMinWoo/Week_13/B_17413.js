const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim();
let result = [];
const re = /(<.+?>|\s)/g; // <>에 문자 하나 이상 포함하는 문자열 혹은 공백 문자, split할 때 기억했다 정규식 포함하는 애들까지 나누기 위해 ()
const arr = input.split(re); // 정규식 기준으로 split

arr.map((a) => {
    if (re.test(a)) {
        result += a;
    } else {
        let b = a.split("").reverse().join("");
        result += b;
    }
});
console.log(result);
/*
메모리: 14520 KB
시간: 144 ms
*/
