function solution(n, left, right) {
  let answer = [];
  let count = 0;
  
  let x = parseInt(left/n);
  let y = left%n;

  while (count !== (right-left+1)) {        
      answer.push(x>y ? x+1 : y+1);        
      if (y === n-1) {
          x++;
          y = 0;
      } else y++;
      count++;
  }
  
  return answer;
}

/*
정확성  테스트
테스트 1 〉	통과 (5.11ms, 43.3MB)
테스트 2 〉	통과 (4.17ms, 49.9MB)
테스트 3 〉	통과 (4.27ms, 49.3MB)
테스트 4 〉	통과 (0.12ms, 33.5MB)
테스트 5 〉	통과 (0.13ms, 33.4MB)
테스트 6 〉	통과 (5.18ms, 43.4MB)
테스트 7 〉	통과 (5.00ms, 43.6MB)
테스트 8 〉	통과 (4.76ms, 43.6MB)
테스트 9 〉	통과 (4.97ms, 44.3MB)
테스트 10 〉	통과 (5.10ms, 44.1MB)
테스트 11 〉	통과 (5.20ms, 44MB)
테스트 12 〉	통과 (7.31ms, 47MB)
테스트 13 〉	통과 (7.54ms, 47.5MB)
테스트 14 〉	통과 (6.69ms, 44.4MB)
테스트 15 〉	통과 (4.49ms, 49.5MB)
테스트 16 〉	통과 (4.72ms, 50.1MB)
테스트 17 〉	통과 (4.91ms, 44.6MB)
테스트 18 〉	통과 (5.02ms, 50MB)
테스트 19 〉	통과 (4.46ms, 49.9MB)
테스트 20 〉	통과 (4.78ms, 43.8MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/