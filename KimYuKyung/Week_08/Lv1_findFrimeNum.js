function solution(n) {    
  let answer = 0;
  let array = new Array(n+1).fill(true);
  
  for (i=2; i<n; i++) {
      for (j=i; j<=n; j+=i) {
          if (j === i) continue;
          else array[j] = false;
      } 
  }
     
  array.forEach((x) => {
      if (x) answer ++;
  })

  return answer-2; // -2: 0과 1 제거
}

/*
정확성  테스트
테스트 1 〉	통과 (0.06ms, 33.6MB)
테스트 2 〉	통과 (0.20ms, 33.6MB)
테스트 3 〉	통과 (0.27ms, 33.5MB)
테스트 4 〉	통과 (0.42ms, 33.5MB)
테스트 5 〉	통과 (0.33ms, 33.5MB)
테스트 6 〉	통과 (2.54ms, 36.6MB)
테스트 7 〉	통과 (2.05ms, 36.6MB)
테스트 8 〉	통과 (2.15ms, 36.5MB)
테스트 9 〉	통과 (2.40ms, 36.6MB)
테스트 10 〉	통과 (21.19ms, 38.7MB)
테스트 11 〉	통과 (79.27ms, 43.2MB)
테스트 12 〉	통과 (23.47ms, 38.9MB)
효율성  테스트
테스트 1 〉	통과 (68.54ms, 43.6MB)
테스트 2 〉	통과 (65.65ms, 43.3MB)
테스트 3 〉	통과 (68.24ms, 43.5MB)
테스트 4 〉	통과 (68.95ms, 43.4MB)
채점 결과
정확성: 75.0
효율성: 25.0
합계: 100.0 / 100.0
*/