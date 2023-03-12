let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
input = input.map((item) => item.trim('\r'));
const n = parseInt(input[0]);       
const postfix = input[1];           
const variables = Array(n).fill(0);     

for (let i = 0; i < n; i++) {       // [1,2,3,4,5] 처럼 피연산자에 대응하는 값 입력
    variables[i] = parseInt(input[i + 2]);
  }

let stack=[];
for(let i=0;i<postfix.length;i++){
    const num = postfix.charCodeAt(i);      // 각 위치의 유니코드를 비교한다.
    if(num >= 'A'.charCodeAt()&&num<='Z'.charCodeAt()){     // 해당범위에 있으면 stack에  var배열에서 맞는 값을 stack에 push
        stack.push(variables[num - 65]);
    }else{
        let a = stack.pop();
        let b = stack.pop();
        if(postfix[i]==="+") stack.push(b+a);
        else if(postfix[i]==="-") stack.push(b-a);
        else if(postfix[i]==="*") stack.push(b*a);
        else if(postfix[i]==="/") stack.push(b/a);
    }
}
console.log(stack[0].toFixed(2));       //소수점 2자리수까지 출력

/*
메모리: 9320 KB
시간: 136 ms
*/

