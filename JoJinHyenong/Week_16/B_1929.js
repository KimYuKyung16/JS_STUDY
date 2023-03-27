let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
const isPrime = (num) => {      // 소수인지 판별하는 함수
    if(num === 1) return false;     // 1이면 패스
    for(var i=2; i<=Math.sqrt(num); i++){       
        if((num%i)==0) return false;        // 나누어 떨어지면 소수가 아님
    }
    return true;        // 그 외 조건은 소수
}
const [n,m] = input[0].split(' ').map(item=>Number(item)); // 숫자로 바꾸기

for(var i=n; i<=m; i++) 
    isPrime(i) ? console.log(i) : null      // 판별함수가  true면 출력 아니면 null

/*
메모리: 17064 KB
시간: 4188 ms
*/