function solution(progresses, speeds) {
    let answer = [];
    let rest = progresses.map((a) => 100 - a);
    let days = rest.map((a, i) => Math.ceil(a / speeds[i]));
    let stack = [days.shift()];
    let count = 1;

    while (days.length) {
        let a = days.shift();
        if (stack[0] >= a) {
            stack.push(a);
        } else {
            answer.push(stack.length);
            stack = [a];
        }
    }
    answer.push(stack.length);
    return answer;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.07ms, 33.5MB)
// 테스트 2 〉	통과 (0.25ms, 33.6MB)
// 테스트 3 〉	통과 (0.17ms, 33.5MB)
// 테스트 4 〉	통과 (0.16ms, 33.6MB)
// 테스트 5 〉	통과 (0.07ms, 33.5MB)
// 테스트 6 〉	통과 (0.15ms, 33.5MB)
// 테스트 7 〉	통과 (0.26ms, 33.5MB)
// 테스트 8 〉	통과 (0.20ms, 33.5MB)
// 테스트 9 〉	통과 (0.16ms, 33.7MB)
// 테스트 10 〉	통과 (0.16ms, 33.6MB)
// 테스트 11 〉	통과 (0.07ms, 33.6MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
