const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");
const [num, ...arr] = input;
const result = [];
arr.forEach((a) => {
    //괄호가 들어갈 stack
    let stack = [];
    for (let i = 0; i < a.length; i++) {
        //'(' 일때 '('넣기,
        if (a[i] === "(") {
            stack.push("(");
        } else {
            //')'일때 stack의 마지막이 "("이라면 pop(), 아니라면 ')'넣기
            if (stack[stack.length - 1] === "(") stack.pop();
            else stack.push(")");
        }
    }
    //stack에 괄호가 있다면 올바른 괄호열이 아님.
    stack.length === 0 ? console.log("YES") : console.log("NO");
});
