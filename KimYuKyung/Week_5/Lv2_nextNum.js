function solution(n) {
  let answer = n+1;
  let n_len = n.toString(2).match(/1/g).length;
  
  while(1) {
      let answer_len = answer.toString(2).match(/1/g).length;
      if (n_len === answer_len) return answer;
      else answer ++;
  }
  return answer;
}

/*
정확성  테스트
테스트 1 〉	통과 (0.05ms, 33.4MB)
테스트 2 〉	통과 (0.07ms, 33.4MB)
테스트 3 〉	통과 (0.05ms, 33.4MB)
테스트 4 〉	통과 (0.05ms, 33.5MB)
테스트 5 〉	통과 (0.05ms, 33.4MB)
테스트 6 〉	통과 (0.05ms, 33.4MB)
테스트 7 〉	통과 (0.05ms, 33.4MB)
테스트 8 〉	통과 (0.05ms, 33.4MB)
테스트 9 〉	통과 (0.05ms, 33.5MB)
테스트 10 〉	통과 (0.07ms, 33.6MB)
테스트 11 〉	통과 (0.05ms, 33.5MB)
테스트 12 〉	통과 (0.05ms, 33.4MB)
테스트 13 〉	통과 (0.07ms, 33.4MB)
테스트 14 〉	통과 (0.05ms, 33.5MB)
효율성  테스트
테스트 1 〉	통과 (0.07ms, 33MB)
테스트 2 〉	통과 (0.07ms, 33.4MB)
테스트 3 〉	통과 (0.08ms, 33MB)
테스트 4 〉	통과 (0.05ms, 33.4MB)
테스트 5 〉	통과 (0.07ms, 33MB)
테스트 6 〉	통과 (0.06ms, 33.3MB)
채점 결과
정확성: 70.0
효율성: 30.0
합계: 100.0 / 100.0
*/