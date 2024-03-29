function solution(a, b, n) {
    let answer = 0;
    while (Math.floor(n / a) != 0) {
        answer += Math.floor(n / a) * b;
        n = Math.floor(n / a) * b + (n % a);
    }

    return answer;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.17ms, 33.4MB)
// 테스트 2 〉	통과 (0.04ms, 33.5MB)
// 테스트 3 〉	통과 (0.14ms, 33.5MB)
// 테스트 4 〉	통과 (0.04ms, 33.5MB)
// 테스트 5 〉	통과 (0.04ms, 33.6MB)
// 테스트 6 〉	통과 (0.04ms, 33.4MB)
// 테스트 7 〉	통과 (0.04ms, 33.6MB)
// 테스트 8 〉	통과 (0.04ms, 33.6MB)
// 테스트 9 〉	통과 (0.17ms, 33.5MB)
// 테스트 10 〉	통과 (0.04ms, 33.6MB)
// 테스트 11 〉	통과 (0.04ms, 33.5MB)
// 테스트 12 〉	통과 (0.72ms, 33.7MB)
// 테스트 13 〉	통과 (0.06ms, 33.5MB)
// 테스트 14 〉	통과 (0.03ms, 33.5MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
