function solution(absolutes, signs) {
  let answer = 0;
  for (let i=0; i<absolutes.length; i++) {
      signs[i] ? answer += absolutes[i] : answer -= absolutes[i] 
  }
  return answer;
}

/*
정확성  테스트
테스트 1 〉	통과 (0.08ms, 33.4MB)
테스트 2 〉	통과 (0.09ms, 33.3MB)
테스트 3 〉	통과 (0.09ms, 33.4MB)
테스트 4 〉	통과 (0.08ms, 33.4MB)
테스트 5 〉	통과 (0.08ms, 33.3MB)
테스트 6 〉	통과 (0.10ms, 33.4MB)
테스트 7 〉	통과 (0.08ms, 33.4MB)
테스트 8 〉	통과 (0.08ms, 33.4MB)
테스트 9 〉	통과 (0.08ms, 33.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/