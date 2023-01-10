function solution(n, m) {
  var answer = [];
  let big = n>m?n:m;
  let small = n<m?n:m;
  
  // 최대공약수 구하기
  for (let i = parseInt(big/2); i>=1; i--) {
      if (big%i === 0 && small%i === 0) {
          answer[0] = i;
          break;
      }
  }
  
  // 최소공배수 구하기
  answer[1] = big;
  while(1) {
      if (answer[1] % small === 0) break;
      else answer[1] += big;
  }
  
  return answer;
}

/*
정확성  테스트
테스트 1 〉	통과 (0.05ms, 33.4MB)
테스트 2 〉	통과 (0.14ms, 33.5MB)
테스트 3 〉	통과 (0.05ms, 33.4MB)
테스트 4 〉	통과 (0.05ms, 33.4MB)
테스트 5 〉	통과 (0.05ms, 33.4MB)
테스트 6 〉	통과 (0.05ms, 33.4MB)
테스트 7 〉	통과 (0.05ms, 33.4MB)
테스트 8 〉	통과 (0.05ms, 33.3MB)
테스트 9 〉	통과 (0.06ms, 33.4MB)
테스트 10 〉	통과 (0.05ms, 33.5MB)
테스트 11 〉	통과 (0.15ms, 33.4MB)
테스트 12 〉	통과 (0.16ms, 33.4MB)
테스트 13 〉	통과 (0.16ms, 33.4MB)
테스트 14 〉	통과 (0.16ms, 33.4MB)
테스트 15 〉	통과 (0.14ms, 33.4MB)
테스트 16 〉	통과 (0.16ms, 33.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/