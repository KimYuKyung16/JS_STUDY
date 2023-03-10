//실패

function solution(n, left, right) {
    let nArray = new Array(n);
    let answer = [];
    for (let i = 0; i < n; i++) nArray[i] = new Array(n);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (j > i) nArray[i][j] = j + 1;
            else nArray[i][j] = i + 1;
        }
    }

    return answer.concat(...nArray).slice(left, right + 1);
}

// function solution(n, left, right) {
//     var answer = [];
//     return answer;
// }

// 정확성  테스트
// 테스트 1 〉	통과 (4.11ms, 43.6MB)
// 테스트 2 〉	실패 (signal: aborted (core dumped))
// 테스트 3 〉	실패 (signal: aborted (core dumped))
// 테스트 4 〉	통과 (0.49ms, 33.7MB)
// 테스트 5 〉	통과 (0.45ms, 33.8MB)
// 테스트 6 〉	통과 (20.27ms, 58.6MB)
// 테스트 7 〉	통과 (21.12ms, 58.7MB)
// 테스트 8 〉	통과 (23.09ms, 58.2MB)
// 테스트 9 〉	실패 (signal: aborted (core dumped))
// 테스트 10 〉	실패 (signal: aborted (core dumped))
// 테스트 11 〉	실패 (signal: aborted (core dumped))
// 테스트 12 〉	실패 (signal: aborted (core dumped))
// 테스트 13 〉	실패 (signal: aborted (core dumped))
// 테스트 14 〉	실패 (signal: aborted (core dumped))
// 테스트 15 〉	실패 (signal: aborted (core dumped))
// 테스트 16 〉	실패 (signal: aborted (core dumped))
// 테스트 17 〉	실패 (signal: aborted (core dumped))
// 테스트 18 〉	실패 (signal: aborted (core dumped))
// 테스트 19 〉	실패 (signal: aborted (core dumped))
// 테스트 20 〉	실패 (signal: aborted (core dumped))
// 채점 결과
// 정확성: 30.0
// 합계: 30.0 / 100.0
