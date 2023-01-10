function solution(left, right) {
  let answer = 0;
  
  for (let i=left; i<=right; i++) {
      let count = 1;
          
      for (let j=1; j<=(i/2); j++) {
          if (i%j === 0) count++;
      }
      
      if (count%2 === 0) answer += i;
      else answer -= i;
  }
  
  return answer;
}

/*
정확성  테스트
테스트 1 〉	통과 (2.74ms, 36.5MB)
테스트 2 〉	통과 (2.08ms, 36.6MB)
테스트 3 〉	통과 (1.96ms, 36.6MB)
테스트 4 〉	통과 (1.99ms, 36.5MB)
테스트 5 〉	통과 (3.20ms, 36.6MB)
테스트 6 〉	통과 (0.44ms, 33.5MB)
테스트 7 〉	통과 (0.24ms, 33.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/