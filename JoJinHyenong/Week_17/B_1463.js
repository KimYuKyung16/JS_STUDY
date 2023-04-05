let input = require('fs').readFileSync('example.txt').toString();
const num = Number(input);
let dy = Array(num+1).fill(0);      // 최솟값을 넣어줄 배열 생성
for(let i=2;i<dy.length;i++){
    dy[i] = dy[i-1]+1;      //1을 뺏을 경우
    if(i%2===0){            // 2 로 나눴을 경우 
        dy[i] = Math.min(dy[i],dy[i/2]+1)
    }   
    if(i%3===0){            // 3으로 나눴을 경우
        dy[i] = Math.min(dy[i],dy[i/3]+1)
    }
}
console.log(dy[num])

/*
메모리: 17440 KB
시간: 188 ms
*/