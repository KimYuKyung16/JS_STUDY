function solution(s) {
    let answer = -1;
    s = [...s];
    let stack = [];
    stack.push(s[0]);
    for (let i = 1; i < s.length; i++) {
        if (stack[stack.length - 1] === s[i]) stack.pop();
        else stack.push(s[i]);
    }

    return stack.length ? 0 : 1;
}
// 정확성  테스트
// 테스트 1 〉	통과 (0.04ms, 33.5MB)
// 테스트 2 〉	통과 (14.27ms, 38.5MB)
// 테스트 3 〉	통과 (5.82ms, 38.8MB)
// 테스트 4 〉	통과 (5.84ms, 39.1MB)
// 테스트 5 〉	통과 (5.48ms, 39.1MB)
// 테스트 6 〉	통과 (7.09ms, 39MB)
// 테스트 7 〉	통과 (7.96ms, 39MB)
// 테스트 8 〉	통과 (7.02ms, 39.1MB)
// 테스트 9 〉	통과 (0.04ms, 33.5MB)
// 테스트 10 〉	통과 (0.13ms, 33.5MB)
// 테스트 11 〉	통과 (0.06ms, 33.5MB)
// 테스트 12 〉	통과 (0.05ms, 33.5MB)
// 테스트 13 〉	통과 (0.06ms, 33.5MB)
// 효율성  테스트
// 테스트 1 〉	통과 (88.09ms, 55.7MB)
// 테스트 2 〉	통과 (54.50ms, 46.7MB)
// 테스트 3 〉	통과 (57.92ms, 51.7MB)
// 테스트 4 〉	통과 (55.56ms, 51.8MB)
// 테스트 5 〉	통과 (31.41ms, 52.1MB)
// 테스트 6 〉	통과 (31.38ms, 52.1MB)
// 테스트 7 〉	통과 (55.85ms, 51.7MB)
// 테스트 8 〉	통과 (76.81ms, 51.6MB)
// 채점 결과
// 정확성: 60.2
// 효율성: 39.8
// 합계: 100.0 / 100.0