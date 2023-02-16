function solution(n, lost, reserve) {
  reserve.sort((a,b) => a-b);
  
  reserve.forEach((x, i) => {
      if (lost.includes(x)) {
          lost.splice(lost.indexOf(x), 1);
          reserve[i] = ' ';
      }
  })
  
  for(let i=0; i<reserve.length; i++) {
      if (lost.includes(reserve[i]-1)) {
          lost.splice(lost.indexOf(reserve[i]-1), 1);
          continue;
      } else if (lost.includes(reserve[i]+1)) {
          lost.splice(lost.indexOf(reserve[i]+1), 1);
          continue;
      } 
  }
  
  return n - lost.length;
}

/*정확성  테스트
테스트 1 〉	통과 (0.11ms, 33.3MB)
테스트 2 〉	통과 (0.09ms, 33.5MB)
테스트 3 〉	통과 (0.09ms, 33.4MB)
테스트 4 〉	통과 (0.08ms, 33.3MB)
테스트 5 〉	통과 (0.18ms, 33.4MB)
테스트 6 〉	통과 (0.09ms, 33.6MB)
테스트 7 〉	통과 (0.19ms, 33.5MB)
테스트 8 〉	통과 (0.08ms, 33.4MB)
테스트 9 〉	통과 (0.08ms, 33.4MB)
테스트 10 〉	통과 (0.12ms, 33.5MB)
테스트 11 〉	통과 (0.10ms, 33.5MB)
테스트 12 〉	통과 (0.08ms, 33.5MB)
테스트 13 〉	통과 (0.08ms, 33.4MB)
테스트 14 〉	통과 (0.08ms, 33.5MB)
테스트 15 〉	통과 (0.08ms, 33.4MB)
테스트 16 〉	통과 (0.09ms, 33.4MB)
테스트 17 〉	통과 (0.08ms, 33.5MB)
테스트 18 〉	통과 (0.08ms, 33.5MB)
테스트 19 〉	통과 (0.10ms, 33.5MB)
테스트 20 〉	통과 (0.08ms, 33.4MB)
테스트 21 〉	통과 (0.07ms, 33.4MB)
테스트 22 〉	통과 (0.07ms, 33.4MB)
테스트 23 〉	통과 (0.08ms, 33.4MB)
테스트 24 〉	통과 (0.11ms, 33.4MB)
테스트 25 〉	통과 (0.08ms, 33.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/