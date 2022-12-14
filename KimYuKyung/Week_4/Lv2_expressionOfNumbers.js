function solution(n) {
  let sum = new Array(n).fill(0);
  let middle = 0;
  let count = 0;
  
  for (let i=1; i<=n; i++) {
      for (let j=middle; j<=(i-1); j++) {
          sum[j] += i;
          if (sum[j] === n) count ++;
          else if (sum[j] > n) middle=j;
          else continue;
      }  
  }
  
  return count;
}

/*
정확성  테스트
테스트 1 〉	통과 (0.14ms, 33.4MB)
테스트 2 〉	통과 (0.33ms, 33.5MB)
테스트 3 〉	통과 (0.28ms, 33.6MB)
테스트 4 〉	통과 (0.28ms, 33.5MB)
테스트 5 〉	통과 (0.27ms, 33.5MB)
테스트 6 〉	통과 (0.14ms, 33.6MB)
테스트 7 〉	통과 (0.29ms, 33.6MB)
테스트 8 〉	통과 (0.20ms, 33.5MB)
테스트 9 〉	통과 (0.14ms, 33.5MB)
테스트 10 〉	통과 (0.39ms, 33.5MB)
테스트 11 〉	통과 (0.39ms, 33.5MB)
테스트 12 〉	통과 (0.30ms, 33.6MB)
테스트 13 〉	통과 (0.30ms, 33.5MB)
테스트 14 〉	통과 (0.28ms, 33.5MB)
테스트 15 〉	통과 (0.05ms, 33.5MB)
테스트 16 〉	통과 (0.07ms, 33.6MB)
테스트 17 〉	통과 (0.14ms, 33.5MB)
테스트 18 〉	통과 (0.05ms, 33.5MB)
효율성  테스트
테스트 1 〉	통과 (3.57ms, 36.5MB)
테스트 2 〉	통과 (3.46ms, 36.5MB)
테스트 3 〉	통과 (3.46ms, 36.4MB)
테스트 4 〉	통과 (2.21ms, 36.4MB)
테스트 5 〉	통과 (2.43ms, 36.5MB)
테스트 6 〉	통과 (2.46ms, 36.5MB)
채점 결과
정확성: 75.0
효율성: 25.0
합계: 100.0 / 100.0
*/