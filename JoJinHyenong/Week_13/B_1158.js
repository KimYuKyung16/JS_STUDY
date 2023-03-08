let input = require('fs').readFileSync('example.txt').toString().trim().split(' ');
let number = Number(input[0]);
let array = Array(number).fill(0).map((item,index)=>item=index+1);  // 1~K까지의 배열을 만든다.
let answer=[];                          // 답을 넣을 배열생성
let now = Number(input[1])-1;           // 계속 변하는 index 번호
let cnt =0;
while(array.length>0){
    cnt = (cnt+now)%array.length;           //cnt에 배열길이로 나눈 나머지 값을 넣어준다.
    answer.push(array[cnt]);
    array.splice(cnt,1);
}
console.log(`<${answer.join(', ')}>`)


/*
메모리: 10640 KB
시간: 132 ms
*/