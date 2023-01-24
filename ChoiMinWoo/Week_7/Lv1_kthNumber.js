function solution(array, commands) {
    let a = [];
    for (let i = 0; i < commands.length; i++) {
        answer = array.slice(commands[i][0] - 1, commands[i][1]);
        answer.sort((a, b) => a - b);
        a[i] = answer[commands[i][2] - 1];
    }

    return a;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.07ms, 33.5MB)
// 테스트 2 〉	통과 (0.08ms, 33.6MB)
// 테스트 3 〉	통과 (0.08ms, 33.5MB)
// 테스트 4 〉	통과 (0.07ms, 33.5MB)
// 테스트 5 〉	통과 (0.08ms, 33.5MB)
// 테스트 6 〉	통과 (0.07ms, 33.5MB)
// 테스트 7 〉	통과 (0.09ms, 33.4MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
