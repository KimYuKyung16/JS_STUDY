function solution(babbling) {
  let answer = 0;
  const available = ['aya', 'ye', 'woo', 'ma'];
  
  babbling.forEach((w) => {
      for (let i=0; i<available.length; i++) {
          let reg = new RegExp(available[i], 'g');
          w = w.replace(reg, i);
      } 

      if (!/[a-z]/g.test(w)) { // 소문자 들어있지 않은 경우
          for (let i=0; i<w.length; i++) {
              if (i === w.length-1) answer ++;
              if (w[i] === w[i+1]) break;
          }
      }
  })
  
  return answer;
}

/*
정확성  테스트
테스트 1 〉	통과 (0.26ms, 33.4MB)
테스트 2 〉	통과 (0.29ms, 33.5MB)
테스트 3 〉	통과 (0.29ms, 33.4MB)
테스트 4 〉	통과 (0.23ms, 33.4MB)
테스트 5 〉	통과 (0.31ms, 33.4MB)
테스트 6 〉	통과 (0.30ms, 33.4MB)
테스트 7 〉	통과 (0.33ms, 33.4MB)
테스트 8 〉	통과 (0.31ms, 33.4MB)
테스트 9 〉	통과 (0.35ms, 33.5MB)
테스트 10 〉	통과 (0.36ms, 33.4MB)
테스트 11 〉	통과 (0.35ms, 33.4MB)
테스트 12 〉	통과 (0.38ms, 33.6MB)
테스트 13 〉	통과 (0.59ms, 33.4MB)
테스트 14 〉	통과 (0.66ms, 33.5MB)
테스트 15 〉	통과 (0.39ms, 33.6MB)
테스트 16 〉	통과 (0.43ms, 33.6MB)
테스트 17 〉	통과 (0.43ms, 33.6MB)
테스트 18 〉	통과 (0.57ms, 33.6MB)
테스트 19 〉	통과 (0.25ms, 33.4MB)
테스트 20 〉	통과 (0.31ms, 33.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/