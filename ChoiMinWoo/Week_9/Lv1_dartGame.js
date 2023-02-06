function solution(dartResult) {
    let num = [];
    let sumnum = [];
    for (let i = 0; i < dartResult.length; i++) {
        if (dartResult[i] === "S") {
            sumnum.push(num.pop() * 1);
        } else if (dartResult[i] === "D") {
            sumnum.push(num.pop() ** 2);
        } else if (dartResult[i] === "T") {
            sumnum.push(num.pop() ** 3);
        } else if (dartResult[i] === "*") {
            sumnum[sumnum.length - 2] *= 2;
            sumnum[sumnum.length - 1] *= 2;
        } else if (dartResult[i] === "#") {
            sumnum[sumnum.length - 1] *= -1;
        } else {
            num.push(num.length ? num.pop() + dartResult[i] : dartResult[i]);
        }
    }
    return sumnum.reduce((a, b) => a + b);
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.07ms, 33.5MB)
// 테스트 2 〉	통과 (0.12ms, 33.3MB)
// 테스트 3 〉	통과 (0.08ms, 33.5MB)
// 테스트 4 〉	통과 (0.09ms, 33.4MB)
// 테스트 5 〉	통과 (0.07ms, 33.5MB)
// 테스트 6 〉	통과 (0.08ms, 33.6MB)
// 테스트 7 〉	통과 (0.08ms, 33.6MB)
// 테스트 8 〉	통과 (0.07ms, 33.6MB)
// 테스트 9 〉	통과 (0.09ms, 33.5MB)
// 테스트 10 〉	통과 (0.08ms, 33.5MB)
// 테스트 11 〉	통과 (0.07ms, 33.4MB)
// 테스트 12 〉	통과 (0.07ms, 33.4MB)
// 테스트 13 〉	통과 (0.10ms, 33.4MB)
// 테스트 14 〉	통과 (0.08ms, 33.4MB)
// 테스트 15 〉	통과 (0.10ms, 33.4MB)
// 테스트 16 〉	통과 (0.09ms, 33.6MB)
// 테스트 17 〉	통과 (0.10ms, 33.4MB)
// 테스트 18 〉	통과 (0.09ms, 33.6MB)
// 테스트 19 〉	통과 (0.12ms, 33.4MB)
// 테스트 20 〉	통과 (0.11ms, 33.4MB)
// 테스트 21 〉	통과 (0.08ms, 33.4MB)
// 테스트 22 〉	통과 (0.13ms, 33.5MB)
// 테스트 23 〉	통과 (0.08ms, 33.5MB)
// 테스트 24 〉	통과 (0.10ms, 33.5MB)
// 테스트 25 〉	통과 (0.08ms, 33.4MB)
// 테스트 26 〉	통과 (0.08ms, 33.5MB)
// 테스트 27 〉	통과 (0.08ms, 33.5MB)
// 테스트 28 〉	통과 (0.07ms, 33.5MB)
// 테스트 29 〉	통과 (0.09ms, 33.4MB)
// 테스트 30 〉	통과 (0.08ms, 33.5MB)
// 테스트 31 〉	통과 (0.12ms, 33.5MB)
// 테스트 32 〉	통과 (0.08ms, 33.5MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
