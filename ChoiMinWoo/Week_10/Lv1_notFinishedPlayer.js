function solution(participant, completion) {
    let a = participant.sort();
    let b = completion.sort();
    for (let i = 0; i < a.length; i++) {
        if (participant[i] !== completion[i]) {
            return participant[i];
        }
    }
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.08ms, 33.6MB)
// 테스트 2 〉	통과 (0.04ms, 33.5MB)
// 테스트 3 〉	통과 (0.52ms, 33.5MB)
// 테스트 4 〉	통과 (0.71ms, 33.7MB)
// 테스트 5 〉	통과 (0.88ms, 33.7MB)
// 테스트 6 〉	통과 (0.03ms, 33.5MB)
// 테스트 7 〉	통과 (0.04ms, 33.6MB)
// 효율성  테스트
// 테스트 1 〉	통과 (42.32ms, 47.1MB)
// 테스트 2 〉	통과 (67.93ms, 52.8MB)
// 테스트 3 〉	통과 (91.63ms, 54.8MB)
// 테스트 4 〉	통과 (103.80ms, 58.3MB)
// 테스트 5 〉	통과 (92.54ms, 57MB)
// 채점 결과
// 정확성: 58.3
// 효율성: 41.7
// 합계: 100.0 / 100.0
