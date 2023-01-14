function solution(d, budget) {
    let answer = 0;
    d.sort((a, b) => a - b);
    for (let i = 0; i < d.length; i++) {
        budget -= d[i];
        if (budget < 0) break;
        answer++;
    }
    return answer;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.07ms, 33.5MB)
// 테스트 2 〉	통과 (0.04ms, 33.5MB)
// 테스트 3 〉	통과 (0.07ms, 33.5MB)
// 테스트 4 〉	통과 (0.07ms, 33.6MB)
// 테스트 5 〉	통과 (0.05ms, 33.5MB)
// 테스트 6 〉	통과 (0.06ms, 33.6MB)
// 테스트 7 〉	통과 (0.16ms, 33.6MB)
// 테스트 8 〉	통과 (0.20ms, 33.6MB)
// 테스트 9 〉	통과 (0.21ms, 33.6MB)
// 테스트 10 〉	통과 (0.28ms, 33.5MB)
// 테스트 11 〉	통과 (0.27ms, 33.6MB)
// 테스트 12 〉	통과 (0.21ms, 33.6MB)
// 테스트 13 〉	통과 (0.25ms, 33.6MB)
// 테스트 14 〉	통과 (0.14ms, 33.6MB)
// 테스트 15 〉	통과 (0.15ms, 33.5MB)
// 테스트 16 〉	통과 (0.22ms, 33.5MB)
// 테스트 17 〉	통과 (0.14ms, 33.5MB)
// 테스트 18 〉	통과 (0.16ms, 33.7MB)
// 테스트 19 〉	통과 (0.20ms, 33.5MB)
// 테스트 20 〉	통과 (0.22ms, 33.5MB)
// 테스트 21 〉	통과 (0.17ms, 33.6MB)
// 테스트 22 〉	통과 (0.13ms, 33.5MB)
// 테스트 23 〉	통과 (0.13ms, 33.6MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
