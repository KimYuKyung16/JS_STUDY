// 나중에 다시 풀어보기 

function solution(n) {
  const dp = new Array(n+1).fill(0);
  dp[0]=1; dp[1]=1;
  
  for (let i=2; i<n+1; i++)  {
    dp[i] = (dp[i-2] + dp[i-1]) % 1234567;
  }
  
  return dp[n];
}



/* 못 푼 문제 : 실패한 코드 */

// function solution(n) {
//     let answer = 0;
  
//     calculate(n, 0, '');
  
//     function calculate(n, sum, test) {
//         console.log(sum, test)
//         if (sum === n) answer += 1;
//         if (sum > n) return 0;
      
//         calculate(n, sum += 1, test += '1');
//         calculate(n, sum += 2, test += '2');
//     }
  
//     return answer % 1234567;
// }

/*
정확성  테스트
테스트 1 〉	통과 (0.04ms, 33.5MB)
테스트 2 〉	통과 (0.04ms, 33.4MB)
테스트 3 〉	통과 (0.12ms, 33.4MB)
테스트 4 〉	통과 (0.13ms, 33.4MB)
테스트 5 〉	통과 (0.12ms, 33.4MB)
테스트 6 〉	통과 (0.12ms, 33.5MB)
테스트 7 〉	통과 (0.13ms, 33.4MB)
테스트 8 〉	통과 (0.13ms, 33.4MB)
테스트 9 〉	통과 (0.13ms, 33.5MB)
테스트 10 〉	통과 (0.13ms, 33.5MB)
테스트 11 〉	통과 (0.21ms, 33.5MB)
테스트 12 〉	통과 (0.21ms, 33.4MB)
테스트 13 〉	통과 (0.18ms, 33.4MB)
테스트 14 〉	통과 (0.22ms, 33.6MB)
테스트 15 〉	통과 (0.19ms, 33.4MB)
테스트 16 〉	통과 (0.20ms, 33.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/