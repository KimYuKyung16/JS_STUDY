const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((item)=>Number(item));
// 모든 배열을 숫자로 변환
let answer=[];
let stack=[];
let stackpush = 1;      //1로 초기화
for(let i=1;i<=input[0];i++){
    let num = input[i];     
    while(stackpush<=num){      //다음 숫자가 이전숫자보다 크거나 같으면 그 차이만큼 "+"추가
        stack.push(stackpush++);        //stack에 이전숫자에서 num까지 push하면서 1씩 증가
        answer.push("+");
    }
    let stackpop = stack.pop();
    answer.push("-")
    if(stackpop!==num){
        answer = ["NO"];
        break;
    }
}
console.log(answer.join('\n'));

/*
메모리: 33816 KB
시간: 256 ms
*/