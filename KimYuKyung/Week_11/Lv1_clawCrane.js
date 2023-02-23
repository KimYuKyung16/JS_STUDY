function solution(board, moves) {
    let answer = 0;
    let rotatedBoard = new Array(board.length).fill(0);
    let stack = [];

    for (let i=0; i<board.length; i++) { // 2차원 배열 생성
        rotatedBoard[i] = new Array(board.length).fill(0);
    }

    for(let i=0; i<board.length; i++) { // 90도 회전
        for (let j=0; j<board.length; j++) {
            rotatedBoard[j][board.length-i-1] = board[i][j];
        }    
    }

    for(let i=0; i<rotatedBoard.length; i++) { // 0 제거
        rotatedBoard[i] = rotatedBoard[i].filter((x) => x !== 0)
    }

    moves.forEach((x) => {
        if (rotatedBoard[x-1].length) {
            let last = rotatedBoard[x-1].pop();
            if (last === stack[stack.length-1]) { // 같은 값일 경우
                stack.pop();
                answer += 2;
            } else stack.push(last);
        } 
    })

    return answer;
}

/*
정확성  테스트
테스트 1 〉	통과 (0.21ms, 33.5MB)
테스트 2 〉	통과 (0.21ms, 33.4MB)
테스트 3 〉	통과 (0.34ms, 33.2MB)
테스트 4 〉	통과 (0.50ms, 33.5MB)
테스트 5 〉	통과 (0.31ms, 33.5MB)
테스트 6 〉	통과 (0.21ms, 33.5MB)
테스트 7 〉	통과 (0.26ms, 33.6MB)
테스트 8 〉	통과 (0.31ms, 33.6MB)
테스트 9 〉	통과 (0.48ms, 33.5MB)
테스트 10 〉	통과 (0.34ms, 33.6MB)
테스트 11 〉	통과 (0.65ms, 33.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/