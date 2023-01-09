function solution(left, right) {
    let answer = 0;
    for (let i = left; i <= right; i++) {
        if (measure(i) % 2 === 0) answer += i;
        else answer -= i;
    }
    return answer;
}
function measure(a) {
    let count = 0;
    for (let i = 1; i <= a; i++) {
        if (a % i === 0) count++;
    }
    return count;
}
// 정확성  테스트
// 테스트 1 〉	통과 (2.87ms, 35.3MB)
// 테스트 2 〉	통과 (1.75ms, 35.4MB)
// 테스트 3 〉	통과 (1.57ms, 35.3MB)
// 테스트 4 〉	통과 (1.07ms, 35.3MB)
// 테스트 5 〉	통과 (3.56ms, 35MB)
// 테스트 6 〉	통과 (0.86ms, 35MB)
// 테스트 7 〉	통과 (0.84ms, 35.3MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
