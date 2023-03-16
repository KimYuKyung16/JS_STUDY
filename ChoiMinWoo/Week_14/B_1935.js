const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");
let num = input.shift();
let [string, ...arr] = input;
let strArr = string.split("");

let numStack = [];
let eng = {};

//각 영어를 주어진 arr의 값으로 변경하기 위한 Object
for (let i = 0; i < num; i++) {
    eng[i + 65] = +arr[i];
}

for (let i = 0; i < strArr.length; i++) {
    //영어면 해당 값을 numStack에 넣음
    if (strArr[i].charCodeAt() > 64 && strArr[i].charCodeAt() < 91) {
        numStack.push(eng[strArr[i].charCodeAt()]);
    } else {
        //연산자일 경우
        //numStack에서 b,a순으로 뺀 후 연산 진행 후 해당값을 다시 numStack에 넣음
        let b = numStack.pop();
        let a = numStack.pop();
        let c;
        switch (strArr[i]) {
            case "+":
                c = a + b;
                break;
            case "-":
                c = a - b;
                break;
            case "*":
                c = a * b;
                break;
            case "/":
                c = a / b;
                break;
        }
        numStack.push(c);
    }
}

console.log(numStack[0].toFixed(2));
/*
메모리: 9324 KB
시간: 196 ms
*/
