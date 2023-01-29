function solution(answers) {
    const q = [1, 2, 3, 4, 5];
    const w = [2, 1, 2, 3, 2, 4, 2, 5];
    const e = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let answer = [];
    let a1 = answers.filter((a, i) => a === q[i % q.length]).length;
    let b1 = answers.filter((a, i) => a === w[i % w.length]).length;
    let c1 = answers.filter((a, i) => a === e[i % e.length]).length;

    const max = Math.max(a1, b1, c1);
    if (a1 === max) {
        answer.push(1);
    }
    if (b1 === max) {
        answer.push(2);
    }
    if (c1 === max) {
        answer.push(3);
    }

    return answer;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.24ms, 33.4MB)
// 테스트 2 〉	통과 (0.08ms, 33.4MB)
// 테스트 3 〉	통과 (0.12ms, 33.4MB)
// 테스트 4 〉	통과 (0.08ms, 33.4MB)
// 테스트 5 〉	통과 (0.24ms, 33.4MB)
// 테스트 6 〉	통과 (0.17ms, 33.4MB)
// 테스트 7 〉	통과 (0.89ms, 33.6MB)
// 테스트 8 〉	통과 (0.39ms, 33.5MB)
// 테스트 9 〉	통과 (1.49ms, 33.8MB)
// 테스트 10 〉	통과 (0.88ms, 33.5MB)
// 테스트 11 〉	통과 (1.54ms, 33.9MB)
// 테스트 12 〉	통과 (1.39ms, 33.9MB)
// 테스트 13 〉	통과 (0.39ms, 33.5MB)
// 테스트 14 〉	통과 (1.77ms, 33.9MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
