function solution(n) {
  let answer = 0;
  
  while(true) {
      if (n%answer === 1) return answer;
      else answer ++;
  }
}

/*
정확성  테스트
테스트 1 〉	통과 (4.80ms, 36.3MB)
테스트 2 〉	통과 (0.03ms, 33.4MB)
테스트 3 〉	통과 (0.03ms, 33.4MB)
테스트 4 〉	통과 (0.03ms, 33.4MB)
테스트 5 〉	통과 (0.03ms, 33.5MB)
테스트 6 〉	통과 (0.04ms, 33.4MB)
테스트 7 〉	통과 (0.04ms, 33.4MB)
테스트 8 〉	통과 (0.03ms, 33.4MB)
테스트 9 〉	통과 (0.03ms, 33.4MB)
테스트 10 〉	통과 (0.03ms, 33.4MB)
테스트 11 〉	통과 (0.03ms, 33.6MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/