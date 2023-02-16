function solution(number, limit, power) {
  let answer = 0;
  
  for(let i=1; i<=number; i++) {
      let own_power = 0;
      for(let j=1; j<=Math.sqrt(i); j++)  {
          if (i%j === 0) {
              own_power ++;
              if (i/j !== j) own_power ++;
          }
      } 
      if (own_power > limit) answer += power;
      else answer += own_power;
  }
  
  return answer;
}

/*
정확성  테스트
테스트 1 〉	통과 (29.88ms, 36MB)
테스트 2 〉	통과 (30.47ms, 36.4MB)
테스트 3 〉	통과 (30.30ms, 35.9MB)
테스트 4 〉	통과 (30.56ms, 36.2MB)
테스트 5 〉	통과 (29.32ms, 36.3MB)
테스트 6 〉	통과 (6.78ms, 36.9MB)
테스트 7 〉	통과 (2.87ms, 36.8MB)
테스트 8 〉	통과 (2.71ms, 36.7MB)
테스트 9 〉	통과 (4.78ms, 36.7MB)
테스트 10 〉	통과 (2.48ms, 36.7MB)
테스트 11 〉	통과 (73.41ms, 36.9MB)
테스트 12 〉	통과 (71.65ms, 36.9MB)
테스트 13 〉	통과 (71.45ms, 36.7MB)
테스트 14 〉	통과 (75.89ms, 36.9MB)
테스트 15 〉	통과 (77.08ms, 36.9MB)
테스트 16 〉	통과 (79.82ms, 36.7MB)
테스트 17 〉	통과 (0.05ms, 33.4MB)
테스트 18 〉	통과 (74.90ms, 36.7MB)
테스트 19 〉	통과 (3.64ms, 36.7MB)
테스트 20 〉	통과 (3.58ms, 36.7MB)
테스트 21 〉	통과 (0.04ms, 33.5MB)
테스트 22 〉	통과 (0.05ms, 33.3MB)
테스트 23 〉	통과 (0.12ms, 33.4MB)
테스트 24 〉	통과 (82.30ms, 36.9MB)
테스트 25 〉	통과 (77.06ms, 36.9MB)
테스트 26 〉	통과 (2.76ms, 36.7MB)
테스트 27 〉	통과 (2.49ms, 36.8MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/