function solution(citations) {
  let answer;
  
  for (var i=citations.length+1; i>=0; i--) {      
      if ((citations.filter((x) => {return x>=i})).length >= i) return answer = i
  }
}

/*
정확성  테스트
테스트 1 〉	통과 (0.53ms, 30MB)
테스트 2 〉	통과 (2.57ms, 32MB)
테스트 3 〉	통과 (0.97ms, 29.8MB)
테스트 4 〉	통과 (0.86ms, 30.4MB)
테스트 5 〉	통과 (3.48ms, 31.8MB)
테스트 6 〉	통과 (2.94ms, 31.9MB)
테스트 7 〉	통과 (0.29ms, 29.9MB)
테스트 8 〉	통과 (0.08ms, 30MB)
테스트 9 〉	통과 (0.08ms, 30MB)
테스트 10 〉	통과 (0.33ms, 30.1MB)
테스트 11 〉	통과 (5.51ms, 32.8MB)
테스트 12 〉	통과 (0.10ms, 30MB)
테스트 13 〉	통과 (2.24ms, 32MB)
테스트 14 〉	통과 (1.89ms, 30.2MB)
테스트 15 〉	통과 (3.39ms, 32.4MB)
테스트 16 〉	통과 (0.13ms, 33.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/