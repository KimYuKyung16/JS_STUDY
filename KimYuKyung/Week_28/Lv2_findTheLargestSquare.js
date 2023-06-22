function solution(board) {

  if(board.length < 2 || board[0].length < 2) return 1;
  
  let answer = 0;
  
  for(let r = 1; r < board.length; r++) {
      for(let c = 1; c < board[0].length; c++) {
          if(board[r][c] === 0) continue;
          board[r][c] = Math.min(board[r-1][c-1], board[r-1][c], board[r][c-1]) + 1;
      }
      answer = Math.max(answer, ...board[r]);
  }
  
  return answer * answer;
}

/*
정확성  테스트
테스트 1 〉	통과 (0.05ms, 33.4MB)
테스트 2 〉	통과 (0.16ms, 33.4MB)
테스트 3 〉	통과 (0.16ms, 33.4MB)
테스트 4 〉	통과 (0.17ms, 33.5MB)
테스트 5 〉	통과 (0.25ms, 33.4MB)
테스트 6 〉	통과 (0.13ms, 33.5MB)
테스트 7 〉	통과 (0.06ms, 33.4MB)
테스트 8 〉	통과 (0.14ms, 33.5MB)
테스트 9 〉	통과 (0.22ms, 33.4MB)
테스트 10 〉	통과 (0.26ms, 33.5MB)
테스트 11 〉	통과 (0.15ms, 33.5MB)
테스트 12 〉	통과 (0.26ms, 33.4MB)
테스트 13 〉	통과 (0.14ms, 33.4MB)
테스트 14 〉	통과 (0.15ms, 33.4MB)
테스트 15 〉	통과 (0.16ms, 33.5MB)
테스트 16 〉	통과 (0.17ms, 33.5MB)
테스트 17 〉	통과 (0.16ms, 33.4MB)
테스트 18 〉	통과 (0.49ms, 33.4MB)
테스트 19 〉	통과 (0.48ms, 33.5MB)
효율성  테스트
테스트 1 〉	통과 (25.19ms, 82.5MB)
테스트 2 〉	통과 (25.33ms, 82.3MB)
테스트 3 〉	통과 (25.68ms, 82.6MB)
채점 결과
정확성: 59.6
효율성: 40.4
합계: 100.0 / 100.0
*/