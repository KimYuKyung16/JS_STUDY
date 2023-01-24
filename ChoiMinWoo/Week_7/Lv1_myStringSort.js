function solution(strings, n) {
    strings.sort((a, b) => {
        if (a.charCodeAt(n) === b.charCodeAt(n)) {
            return (a > b) - (a < b);
        } else return a.charCodeAt(n) - b.charCodeAt(n);
    });
    return strings;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.08ms, 33.4MB)
// 테스트 2 〉	통과 (0.05ms, 33.5MB)
// 테스트 3 〉	통과 (0.14ms, 33.5MB)
// 테스트 4 〉	통과 (0.15ms, 33.5MB)
// 테스트 5 〉	통과 (0.05ms, 33.4MB)
// 테스트 6 〉	통과 (0.15ms, 33.5MB)
// 테스트 7 〉	통과 (0.12ms, 33.4MB)
// 테스트 8 〉	통과 (0.13ms, 33.5MB)
// 테스트 9 〉	통과 (0.12ms, 33.5MB)
// 테스트 10 〉	통과 (0.15ms, 33.5MB)
// 테스트 11 〉	통과 (0.06ms, 33.2MB)
// 테스트 12 〉	통과 (0.14ms, 33.5MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
