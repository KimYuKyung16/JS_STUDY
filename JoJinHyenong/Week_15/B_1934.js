let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
input = input.map((item) => item.trim('\r'));
let len = input.shift();
function gab(a,b){      // 최대 공약수 구한는 함수
    su=1;
    for(let i=0;i<=Math.min(a,b);i++){
        if(a%i===0&&b%i===0){
            su = i;
        }
    }
    return su;
}
let answer='';
for(let i=0;i<input.length;i++){        // 두 수의 곱/최대공약수 = 최소공배수
    input[i] = input[i].split(' ');
    answer += input[i][0]*input[i][1]/gab(input[i][0],input[i][1])+'\n';
}
console.log(answer)


/*
메모리: 10572 KB
시간: 1344 ms
*/



