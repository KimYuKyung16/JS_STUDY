function solution(s){
  let pcount = 0, ycount = 0;
  
  for (i of s.toLowerCase()) {
      if (i === 'p') pcount ++;
      if (i === 'y') ycount ++; 
  }

  if (pcount === ycount) return true;
  else return false; 
}

/*
정확성  테스트
테스트 1 〉	통과 (0.05ms, 33.6MB)
테스트 2 〉	통과 (0.05ms, 33.4MB)
테스트 3 〉	통과 (0.05ms, 33.6MB)
테스트 4 〉	통과 (0.05ms, 33.5MB)
테스트 5 〉	통과 (0.05ms, 33.4MB)
테스트 6 〉	통과 (0.14ms, 33.5MB)
테스트 7 〉	통과 (0.14ms, 33.4MB)
테스트 8 〉	통과 (0.14ms, 33.5MB)
테스트 9 〉	통과 (0.14ms, 33.2MB)
테스트 10 〉	통과 (0.14ms, 33.2MB)
테스트 11 〉	통과 (0.13ms, 33.4MB)
테스트 12 〉	통과 (0.14ms, 33.4MB)
테스트 13 〉	통과 (0.14ms, 33.4MB)
테스트 14 〉	통과 (0.14ms, 33.5MB)
테스트 15 〉	통과 (0.14ms, 33.4MB)
테스트 16 〉	통과 (0.14ms, 33.4MB)
테스트 17 〉	통과 (0.14ms, 33.4MB)
테스트 18 〉	통과 (0.15ms, 33.5MB)
테스트 19 〉	통과 (0.14ms, 33.5MB)
테스트 20 〉	통과 (0.14ms, 33.5MB)
테스트 21 〉	통과 (0.15ms, 33.6MB)
테스트 22 〉	통과 (0.14ms, 33.4MB)
테스트 23 〉	통과 (0.14ms, 33.6MB)
테스트 24 〉	통과 (0.15ms, 33.4MB)
테스트 25 〉	통과 (0.14ms, 33.5MB)
테스트 26 〉	통과 (0.14ms, 33.5MB)
테스트 27 〉	통과 (0.14ms, 33.4MB)
테스트 28 〉	통과 (0.14ms, 33.6MB)
테스트 29 〉	통과 (0.05ms, 33.4MB)
테스트 30 〉	통과 (0.13ms, 33.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/