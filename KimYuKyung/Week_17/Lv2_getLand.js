function solution(land) {
  let dp = new Array(land.length);
  
  for (let i=0; i<dp.length; i++) {
      dp[i] = new Array(4).fill(0);
  }
  
  dp[0] = land[0];
  
  for (let i=1; i<land.length; i++) {
      for (let j=0; j<4; j++) {
          if (j !== 0) dp[i][0] = Math.max(dp[i][0], land[i][0] + dp[i-1][j]);
          if (j !== 1) dp[i][1] = Math.max(dp[i][1], land[i][1] + dp[i-1][j]);
          if (j !== 2) dp[i][2] = Math.max(dp[i][2], land[i][2] + dp[i-1][j]);
          if (j !== 3) dp[i][3] = Math.max(dp[i][3], land[i][3] + dp[i-1][j]);
      }
  }

  return Math.max(...dp[dp.length-1]);
}

/*
정확성  테스트
테스트 1 〉	통과 (2.55ms, 33.8MB)
테스트 2 〉	통과 (1.62ms, 33.9MB)
테스트 3 〉	통과 (1.62ms, 33.8MB)
테스트 4 〉	통과 (1.64ms, 33.8MB)
테스트 5 〉	통과 (1.80ms, 33.8MB)
테스트 6 〉	통과 (1.66ms, 33.8MB)
테스트 7 〉	통과 (1.70ms, 33.8MB)
테스트 8 〉	통과 (3.16ms, 33.8MB)
테스트 9 〉	통과 (1.64ms, 33.7MB)
테스트 10 〉	통과 (1.66ms, 33.8MB)
테스트 11 〉	통과 (1.83ms, 33.9MB)
테스트 12 〉	통과 (6.53ms, 37.6MB)
테스트 13 〉	통과 (6.54ms, 37.4MB)
테스트 14 〉	통과 (6.63ms, 37.7MB)
테스트 15 〉	통과 (6.56ms, 37.7MB)
테스트 16 〉	통과 (6.62ms, 37.4MB)
테스트 17 〉	통과 (6.64ms, 37.4MB)
테스트 18 〉	통과 (6.70ms, 37.5MB)
효율성  테스트
테스트 1 〉	통과 (46.23ms, 76.9MB)
테스트 2 〉	통과 (45.19ms, 77.3MB)
테스트 3 〉	통과 (65.25ms, 77.4MB)
테스트 4 〉	통과 (46.11ms, 77MB)
채점 결과
정확성: 59.8
효율성: 40.2
합계: 100.0 / 100.0
*/