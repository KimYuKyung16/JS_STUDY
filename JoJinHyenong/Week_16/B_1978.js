let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
let array = input[1].split(' ').map(x=>Number(x));
let answer=0;
for(let x of array){
    if(x===1) {         //1일떄는 넘어간다
        continue;
    }
    else{
        let sosu=0;     // 나누어 떨어지면 증가
        for(let i=2;i<Math.sqrt(x);i++){
            if(x%i===0) {
                sosu++;
            }
        }
        if(sosu===0) {      // 나누어 떨어진게 없으면 answer++
            answer++;
        }
    }
}
console.log(answer)
