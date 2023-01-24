function solution(sizes) {
    const width = [];
    const height = [];

    for(let i = 0; i < sizes.length; i++) {
        const max = Math.max(sizes[i][0], sizes[i][1]);
        const min = Math.min(sizes[i][0], sizes[i][1]);
        width.push(max);
        height.push(min);
    }

    return Math.max(...width) * Math.max(...height);
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.05ms, 33.4MB)
// 테스트 2 〉	통과 (0.05ms, 33.4MB)
// 테스트 3 〉	통과 (0.05ms, 33.2MB)
// 테스트 4 〉	통과 (0.05ms, 33.2MB)
// 테스트 5 〉	통과 (0.08ms, 33.6MB)
// 테스트 6 〉	통과 (0.13ms, 33.6MB)
// 테스트 7 〉	통과 (0.19ms, 33.6MB)
// 테스트 8 〉	통과 (0.21ms, 33.5MB)
// 테스트 9 〉	통과 (0.21ms, 33.4MB)
// 테스트 10 〉	통과 (0.26ms, 33.4MB)
// 테스트 11 〉	통과 (0.28ms, 33.6MB)
// 테스트 12 〉	통과 (0.32ms, 33.5MB)
// 테스트 13 〉	통과 (0.63ms, 33.8MB)
// 테스트 14 〉	통과 (1.02ms, 33.9MB)
// 테스트 15 〉	통과 (1.23ms, 34.1MB)
// 테스트 16 〉	통과 (4.52ms, 38.1MB)
// 테스트 17 〉	통과 (5.11ms, 38.4MB)
// 테스트 18 〉	통과 (4.36ms, 38.4MB)
// 테스트 19 〉	통과 (5.39ms, 38.7MB)
// 테스트 20 〉	통과 (4.79ms, 38.8MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0