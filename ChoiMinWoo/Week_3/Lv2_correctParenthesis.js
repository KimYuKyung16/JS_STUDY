function solution(s) {
    let a = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            a.push("(");
        } else {
            if (a.length === 0) {
                return false;
            }
            a.pop();
        }
    }
    return a.length ? false : true;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.04ms, 33.5MB)
// 테스트 2 〉	통과 (0.04ms, 33.5MB)
// 테스트 3 〉	통과 (0.04ms, 33.5MB)
// 테스트 4 〉	통과 (0.04ms, 33.6MB)
// 테스트 5 〉	통과 (0.04ms, 33.3MB)
// 테스트 6 〉	통과 (0.04ms, 33.2MB)
// 테스트 7 〉	통과 (0.04ms, 33.4MB)
// 테스트 8 〉	통과 (0.04ms, 33.5MB)
// 테스트 9 〉	통과 (0.14ms, 33.4MB)
// 테스트 10 〉	통과 (0.04ms, 33.4MB)
// 테스트 11 〉	통과 (0.04ms, 33.5MB)
// 테스트 12 〉	통과 (0.13ms, 33.5MB)
// 테스트 13 〉	통과 (0.13ms, 33.5MB)
// 테스트 14 〉	통과 (0.13ms, 33.4MB)
// 테스트 15 〉	통과 (0.13ms, 33.5MB)
// 테스트 16 〉	통과 (0.13ms, 33.5MB)
// 테스트 17 〉	통과 (0.13ms, 33.6MB)
// 테스트 18 〉	통과 (0.13ms, 33.5MB)
// 효율성  테스트
// 테스트 1 〉	통과 (3.92ms, 37.6MB)
// 테스트 2 〉	통과 (3.97ms, 37.6MB)
// 채점 결과
// 정확성: 69.5
// 효율성: 30.5
// 합계: 100.0 / 100.0
