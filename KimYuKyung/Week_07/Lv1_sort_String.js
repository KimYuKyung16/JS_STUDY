function solution(strings, n) {
  for (let i=0; i<strings.length; i++) {
      strings[i] = [strings[i][n], strings[i]];
  }
  strings.sort();
  return strings.map((x) => x[1]);
}

/*
정확성  테스트
테스트 1 〉	통과 (0.10ms, 33.4MB)
테스트 2 〉	통과 (0.06ms, 33.4MB)
테스트 3 〉	통과 (0.28ms, 33.4MB)
테스트 4 〉	통과 (0.22ms, 33.4MB)
테스트 5 〉	통과 (0.06ms, 33.4MB)
테스트 6 〉	통과 (0.23ms, 33.4MB)
테스트 7 〉	통과 (0.07ms, 33.4MB)
테스트 8 〉	통과 (0.17ms, 33.4MB)
테스트 9 〉	통과 (0.07ms, 33.4MB)
테스트 10 〉	통과 (0.24ms, 33.5MB)
테스트 11 〉	통과 (0.06ms, 33.4MB)
테스트 12 〉	통과 (0.27ms, 33.6MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/