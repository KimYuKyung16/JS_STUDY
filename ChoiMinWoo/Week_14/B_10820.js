const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\r\n"); //trim() 없음
let answer = "";
for (let i = 0; i < input.length; i++) {
    //input에 ''값이 들어온 경우 문제가 생김
    if (input[i] === "") continue;
    //각 요소 갯수 0으로 초기화
    let A = 0;
    let a = 0;
    let n = 0;
    let o = 0;
    let arr = input[i].split("");
    //각 요소 나오면 ++
    for (let j = 0; j < arr.length; j++) {
        if (arr[j].charCodeAt() >= 65 && arr[j].charCodeAt() <= 90) A++;
        else if (arr[j].charCodeAt() >= 97 && arr[j].charCodeAt() <= 122) a++;
        else if (arr[j].charCodeAt() === 32) o++;
        else n++;
    }

    answer += [a, A, n, o].join(" ") + "\n";
}
console.log(answer.trim());

/*
메모리: 10368 KB
시간: 180 ms
*/
