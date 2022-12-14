function solution(n) {
    console.log(n);
    let a = [0, 1];
    var answer = 0;
    for (let i = 2; i <= n; i++) {
        a.push((a[i - 1] + a[i - 2]) % 1234567);
    }
    return a[n];
}

// 정확성  테스트
// 테스트 1 〉	통과 (3.95ms, 30.2MB)
// 테스트 2 〉	통과 (3.96ms, 30.1MB)
// 테스트 3 〉	통과 (3.92ms, 30.1MB)
// 테스트 4 〉	통과 (3.90ms, 30.3MB)
// 테스트 5 〉	통과 (3.89ms, 29.9MB)
// 테스트 6 〉	통과 (4.04ms, 30.1MB)
// 테스트 7 〉	통과 (4.06ms, 30.3MB)
// 테스트 8 〉	통과 (3.96ms, 30MB)
// 테스트 9 〉	통과 (3.93ms, 30.1MB)
// 테스트 10 〉	통과 (4.14ms, 29.9MB)
// 테스트 11 〉	통과 (3.99ms, 30.1MB)
// 테스트 12 〉	통과 (3.95ms, 30.4MB)
// 테스트 13 〉	통과 (8.33ms, 34.3MB)
// 테스트 14 〉	통과 (8.49ms, 34.7MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
