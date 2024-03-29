function solution(t, p) {
    let answer = 0;
    let array = [];
    let len = p.length;

    for (let i = 0; i < t.length - len + 1; i++) {
        array.push(t.substring(i, i + len));
    }

    return array.map((a) => Number(a)).filter((a) => a <= p).length;
}
// 정확성  테스트
// 테스트 1 〉	통과 (0.79ms, 33.7MB)
// 테스트 2 〉	통과 (1.74ms, 34.1MB)
// 테스트 3 〉	통과 (1.40ms, 33.9MB)
// 테스트 4 〉	통과 (0.98ms, 33.8MB)
// 테스트 5 〉	통과 (0.87ms, 33.7MB)
// 테스트 6 〉	통과 (1.65ms, 34MB)
// 테스트 7 〉	통과 (4.08ms, 34.5MB)
// 테스트 8 〉	통과 (1.38ms, 33.8MB)
// 테스트 9 〉	통과 (0.56ms, 33.5MB)
// 테스트 10 〉	통과 (0.33ms, 33.4MB)
// 테스트 11 〉	통과 (1.28ms, 33.8MB)
// 테스트 12 〉	통과 (3.79ms, 34.5MB)
// 테스트 13 〉	통과 (3.80ms, 34.1MB)
// 테스트 14 〉	통과 (2.20ms, 33.9MB)
// 테스트 15 〉	통과 (1.13ms, 33.9MB)
// 테스트 16 〉	통과 (2.04ms, 33.9MB)
// 테스트 17 〉	통과 (4.22ms, 34.3MB)
// 테스트 18 〉	통과 (3.08ms, 34MB)
// 테스트 19 〉	통과 (1.17ms, 33.7MB)
// 테스트 20 〉	통과 (0.44ms, 33.7MB)
// 테스트 21 〉	통과 (0.27ms, 33.4MB)
// 테스트 22 〉	통과 (0.35ms, 33.5MB)
// 테스트 23 〉	통과 (0.50ms, 33.6MB)
// 테스트 24 〉	통과 (0.14ms, 33.4MB)
// 테스트 25 〉	통과 (0.28ms, 33.4MB)
// 테스트 26 〉	통과 (0.18ms, 33.4MB)
// 테스트 27 〉	통과 (0.17ms, 33.4MB)
// 테스트 28 〉	통과 (0.22ms, 33.5MB)
// 테스트 29 〉	통과 (0.19ms, 33.5MB)
// 테스트 30 〉	통과 (0.41ms, 33.7MB)
// 테스트 31 〉	통과 (0.07ms, 33.4MB)
// 테스트 32 〉	통과 (0.08ms, 33.4MB)
// 테스트 33 〉	통과 (0.07ms, 33.5MB)
// 테스트 34 〉	통과 (0.16ms, 33.4MB)
// 테스트 35 〉	통과 (0.17ms, 33.5MB)
// 테스트 36 〉	통과 (0.23ms, 33.4MB)
// 테스트 37 〉	통과 (0.07ms, 33.5MB)
// 테스트 38 〉	통과 (0.23ms, 33.6MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
