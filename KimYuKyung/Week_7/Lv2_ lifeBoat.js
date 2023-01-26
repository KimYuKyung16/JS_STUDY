function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => a-b);
  
  while (people.length !== 0) {
      if ((people[people.length-1]) + people[0] > limit) {
          people.pop();
      } else {
          people.pop();
          people.shift();
      }
      answer ++;
  }  
  
  return answer;
}

/*
정확성  테스트
테스트 1 〉	통과 (2.21ms, 35.4MB)
테스트 2 〉	통과 (1.23ms, 33.6MB)
테스트 3 〉	통과 (1.38ms, 33.6MB)
테스트 4 〉	통과 (1.28ms, 33.5MB)
테스트 5 〉	통과 (0.77ms, 33.5MB)
테스트 6 〉	통과 (0.47ms, 33.5MB)
테스트 7 〉	통과 (1.21ms, 33.5MB)
테스트 8 〉	통과 (0.17ms, 33.5MB)
테스트 9 〉	통과 (0.43ms, 33.4MB)
테스트 10 〉	통과 (1.23ms, 33.6MB)
테스트 11 〉	통과 (1.55ms, 33.6MB)
테스트 12 〉	통과 (1.03ms, 33.6MB)
테스트 13 〉	통과 (1.23ms, 33.5MB)
테스트 14 〉	통과 (1.34ms, 33.6MB)
테스트 15 〉	통과 (0.24ms, 33.4MB)
효율성  테스트
테스트 1 〉	통과 (56.77ms, 38.4MB)
테스트 2 〉	통과 (12.23ms, 38.5MB)
테스트 3 〉	통과 (32.95ms, 38.2MB)
테스트 4 〉	통과 (11.87ms, 38.7MB)
테스트 5 〉	통과 (11.67ms, 38.2MB)
채점 결과
정확성: 75.0
효율성: 25.0
합계: 100.0 / 100.0
*/