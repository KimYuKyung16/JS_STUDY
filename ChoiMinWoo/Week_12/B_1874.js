const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");
const [num, ...arr] = input;
//+,-들어갈 배열
let answer = [];
let stackNum = 1;
//1~n까지 들어갈 stack
const stack = [];
for (let i = 0; i < num; i++) {
    //stackNum이 arr의 수보다 크거나 같을때 까지 stack에 stackNum추가,stackNum을 ++,answer에 +추가
    while (arr[i] >= stackNum) {
        stack.push(stackNum);
        stackNum++;
        answer.push("+");
    }
    //stack의 마지막 값
    let pop = stack.pop();
    // pop이 arr의 숫자가 아닐때 answer=["NO"] break 그렇지 않으면 정상적으로 answer에 -추가
    if (pop === +arr[i]) {
        answer.push("-");
    } else {
        answer = ["NO"];
        break;
    }
}
console.log(answer.join("\n"));
