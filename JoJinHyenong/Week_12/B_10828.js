let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let answer=[];
let stack=[];
for(let i=1;i<input.length;i++){
    if(input[i].includes("push")){   
        stack.push(input[i].split(' ')[1]); //'push 1' 이라서 split(' ')으로 분리해준다.
    }else if(input[i].includes("pop")){
        answer.push(stack.length===0?-1:stack.pop());
    }else if(input[i].includes("size")){
        answer.push(stack.length);
    }else if(input[i].includes("empty")){
        answer.push(stack.length===0?1:0);
    }else{      //top인 경우
        answer.push(stack.length===0?-1:stack[stack.length-1]);
    }
}
console.log(answer.join('\n'));

/*
메모리: 12052 KB
시간: 192 ms
*/