function solution(number, limit, power) {
    let weaphone = new Array(number)
        .fill(0)
        .map((a, i) =>
            primeNum(i + 1) > limit ? (a = power) : (a = primeNum(i + 1))
        );
    return weaphone.reduce((a, b) => a + b);
}

function primeNum(num) {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) count += 2;
    }
    return Number.isInteger(Math.sqrt(num)) ? count - 1 : count;
}

// 정확성  테스트
// 테스트 1 〉	통과 (14.89ms, 36.5MB)
// 테스트 2 〉	통과 (3.32ms, 36.2MB)
// 테스트 3 〉	통과 (3.47ms, 36.2MB)
// 테스트 4 〉	통과 (4.47ms, 35.8MB)
// 테스트 5 〉	통과 (3.04ms, 36.1MB)
// 테스트 6 〉	통과 (9.98ms, 36.2MB)
// 테스트 7 〉	통과 (4.04ms, 36.2MB)
// 테스트 8 〉	통과 (3.27ms, 36.2MB)
// 테스트 9 〉	통과 (8.70ms, 36.1MB)
// 테스트 10 〉	통과 (3.07ms, 36.3MB)
// 테스트 11 〉	통과 (211.91ms, 37.1MB)
// 테스트 12 〉	통과 (144.62ms, 37.3MB)
// 테스트 13 〉	통과 (135.46ms, 37MB)
// 테스트 14 〉	통과 (140.27ms, 37.1MB)
// 테스트 15 〉	통과 (151.25ms, 37.3MB)
// 테스트 16 〉	통과 (137.00ms, 37.2MB)
// 테스트 17 〉	통과 (0.11ms, 33.5MB)
// 테스트 18 〉	통과 (109.27ms, 37.1MB)
// 테스트 19 〉	통과 (3.06ms, 36.1MB)
// 테스트 20 〉	통과 (2.82ms, 36.2MB)
// 테스트 21 〉	통과 (0.08ms, 33.6MB)
// 테스트 22 〉	통과 (0.16ms, 33.5MB)
// 테스트 23 〉	통과 (0.17ms, 33.4MB)
// 테스트 24 〉	통과 (155.52ms, 37MB)
// 테스트 25 〉	통과 (172.71ms, 37.1MB)
// 테스트 26 〉	통과 (2.14ms, 36.2MB)
// 테스트 27 〉	통과 (2.80ms, 36MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
