function solution(n, words) {
    let answer = [];
    let stack = [words[0]];
    for (let i = 1; i < words.length; i++) {
        let a = words[i - 1];
        let b = words[i];
        if (a[a.length - 1] === b[0] && !stack.includes(b)) {
            stack.push(b);
        } else {
            return [parseInt(i % n) + 1, parseInt(i / n) + 1];
        }
    }
    return [0, 0];
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.06ms, 33.6MB)
// 테스트 2 〉	통과 (0.15ms, 33.1MB)
// 테스트 3 〉	통과 (0.06ms, 33.4MB)
// 테스트 4 〉	통과 (0.13ms, 33.2MB)
// 테스트 5 〉	통과 (0.15ms, 33.4MB)
// 테스트 6 〉	통과 (0.06ms, 33.4MB)
// 테스트 7 〉	통과 (0.14ms, 33.4MB)
// 테스트 8 〉	통과 (0.06ms, 33.5MB)
// 테스트 9 〉	통과 (0.06ms, 33.6MB)
// 테스트 10 〉	통과 (0.17ms, 32.9MB)
// 테스트 11 〉	통과 (0.15ms, 33.1MB)
// 테스트 12 〉	통과 (0.15ms, 33.5MB)
// 테스트 13 〉	통과 (0.07ms, 33.4MB)
// 테스트 14 〉	통과 (0.05ms, 33.6MB)
// 테스트 15 〉	통과 (0.05ms, 33.5MB)
// 테스트 16 〉	통과 (0.05ms, 33.4MB)
// 테스트 17 〉	통과 (0.05ms, 33.4MB)
// 테스트 18 〉	통과 (0.09ms, 33.5MB)
// 테스트 19 〉	통과 (0.05ms, 33.5MB)
// 테스트 20 〉	통과 (0.16ms, 33.5MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
