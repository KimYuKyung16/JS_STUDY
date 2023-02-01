// 시간 초과
// function solution(n) {
//     let answer = 0;
//     for(let i=2; i<=n; i++){
//         if(prime(i)) answer++;
//     }
//     return answer;
// }

// function prime(number){
//     for(let i=2; i<number-1; i++){
//         if(number%i===0) return false
//     }
//     return true
// }

function solution(n) {
    let answer = 1;
    for (let i = 3; i <= n; i++) prime(i) && answer++;
    return answer;
}
function prime(number) {
    const a = Math.sqrt(number);
    for (let i = 2; i <= a; i++) if (number % i === 0) return 0;
    return 1;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.04ms, 33.4MB)
// 테스트 2 〉	통과 (0.14ms, 33.4MB)
// 테스트 3 〉	통과 (0.17ms, 33.4MB)
// 테스트 4 〉	통과 (0.40ms, 33.5MB)
// 테스트 5 〉	통과 (0.29ms, 33.5MB)
// 테스트 6 〉	통과 (1.79ms, 35.5MB)
// 테스트 7 〉	통과 (0.87ms, 35.5MB)
// 테스트 8 〉	통과 (2.05ms, 35.5MB)
// 테스트 9 〉	통과 (2.26ms, 35.6MB)
// 테스트 10 〉	통과 (45.89ms, 35.6MB)
// 테스트 11 〉	통과 (219.09ms, 35.5MB)
// 테스트 12 〉	통과 (53.33ms, 35.6MB)
// 효율성  테스트
// 테스트 1 〉	통과 (233.80ms, 35.5MB)
// 테스트 2 〉	통과 (222.74ms, 35.5MB)
// 테스트 3 〉	통과 (245.49ms, 35.5MB)
// 테스트 4 〉	통과 (227.52ms, 35.4MB)
// 채점 결과
// 정확성: 75.0
// 효율성: 25.0
// 합계: 100.0 / 100.0
