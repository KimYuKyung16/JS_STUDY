function solution(board, moves) {
    let answer = 0;
    let a = [];
    moves.forEach((value) => {
        for (let i = 0; i < board.length; i++) {
            item = board[i][value - 1];
            if (item === 0) continue;
            if (item === a[a.length - 1]) {
                a.pop();
                answer += 2;
            } else a.push(item);
            board[i][value - 1] = 0;
            break;
        }
    });
    return answer;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.19ms, 33.5MB)
// 테스트 2 〉	통과 (0.17ms, 33.4MB)
// 테스트 3 〉	통과 (0.17ms, 33.5MB)
// 테스트 4 〉	통과 (1.29ms, 36.5MB)
// 테스트 5 〉	통과 (0.17ms, 33.4MB)
// 테스트 6 〉	통과 (0.17ms, 33.4MB)
// 테스트 7 〉	통과 (0.19ms, 33.5MB)
// 테스트 8 〉	통과 (0.31ms, 33.5MB)
// 테스트 9 〉	통과 (0.30ms, 33.6MB)
// 테스트 10 〉	통과 (0.32ms, 33.4MB)
// 테스트 11 〉	통과 (1.00ms, 36.4MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
