function solution(s) {
  let answer = [0, 0];
  let sLength; // s의 기존 길이
  let c; // s가 1만 남았을 때의 길이

  s = s.split('');

  while (s.length != 1) {    
      sLength = s.length;
      s = s.filter((x) => x === '1').join('');
      c = s.length;

      answer[1] += (sLength - c);

      // s = [];
      // while (c !== 1) {
      //     s.unshift(String(c%2));
      //     c = parseInt(c/2);     
      // }
      // s.unshift('1');
      
      s = c.toString(2).split('');
      answer[0] ++;
  }   

  return answer
}

/*
정확성  테스트
테스트 1 〉	통과 (0.08ms, 33.4MB)
테스트 2 〉	통과 (4.05ms, 36.8MB)
테스트 3 〉	통과 (0.07ms, 33.4MB)
테스트 4 〉	통과 (0.07ms, 33.4MB)
테스트 5 〉	통과 (0.09ms, 33.5MB)
테스트 6 〉	통과 (0.13ms, 33.4MB)
테스트 7 〉	통과 (0.15ms, 33.5MB)
테스트 8 〉	통과 (0.10ms, 33.5MB)
테스트 9 〉	통과 (7.15ms, 39MB)
테스트 10 〉	통과 (8.36ms, 39.4MB)
테스트 11 〉	통과 (33.26ms, 37.2MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/