function solution(board) {
  let answer = 0;
  const row = board.length;
  const col = board[0].length;

  if (row <= 1 || col <= 1) return 1;

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (board[i][j] > 0) {
        const up = board[i - 1][j];
        const left = board[i][j - 1];
        const cross = board[i - 1][j - 1];
        const minNum = Math.min(up, left, cross);
        board[i][j] = minNum + 1;
        answer = Math.max(answer, board[i][j]);
      }
    }
  }
  return answer * answer;
}

/*
정확성  테스트
테스트 1 〉	통과 (0.09ms, 33.5MB)
테스트 2 〉	통과 (0.24ms, 33.5MB)
테스트 3 〉	통과 (0.18ms, 33.6MB)
테스트 4 〉	통과 (0.24ms, 33.4MB)
테스트 5 〉	통과 (0.17ms, 33.5MB)
테스트 6 〉	통과 (0.17ms, 33.6MB)
테스트 7 〉	통과 (0.06ms, 33.6MB)
테스트 8 〉	통과 (0.13ms, 33.5MB)
테스트 9 〉	통과 (0.18ms, 33.5MB)
테스트 10 〉	통과 (0.17ms, 33.5MB)
테스트 11 〉	통과 (0.17ms, 33.5MB)
테스트 12 〉	통과 (0.17ms, 33.6MB)
테스트 13 〉	통과 (0.20ms, 33.6MB)
테스트 14 〉	통과 (0.18ms, 33.5MB)
테스트 15 〉	통과 (0.19ms, 33.5MB)
테스트 16 〉	통과 (0.23ms, 33.4MB)
테스트 17 〉	통과 (0.20ms, 33.4MB)
테스트 18 〉	통과 (1.04ms, 33.5MB)
테스트 19 〉	통과 (0.78ms, 33.5MB)
효율성  테스트
테스트 1 〉	통과 (94.44ms, 82MB)
테스트 2 〉	통과 (44.37ms, 81.9MB)
테스트 3 〉	통과 (36.05ms, 82.1MB)
채점 결과
정확성: 59.6
효율성: 40.4
합계: 100.0 / 100.0
*/
