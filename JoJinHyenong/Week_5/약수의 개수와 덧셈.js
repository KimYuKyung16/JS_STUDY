function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) { // 제곱근이 정수면 약수의 개수는 홀수
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}
/// 제곱근이 정수면 약수의 개수는 홀수라는 것을 깨달았다.

// 정확성  테스트
// 테스트 1 〉	통과 (0.17ms, 33.6MB)
// 테스트 2 〉	통과 (0.13ms, 33.5MB)
// 테스트 3 〉	통과 (0.19ms, 33.6MB)
// 테스트 4 〉	통과 (0.16ms, 33.5MB)
// 테스트 5 〉	통과 (0.25ms, 33.5MB)
// 테스트 6 〉	통과 (0.12ms, 33.6MB)
// 테스트 7 〉	통과 (0.16ms, 33.5MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0