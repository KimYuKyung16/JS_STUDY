function solution(dartResult) {
  let result = [];
  let c = -1;

  dartResult = dartResult.split('');
  for (let i=0; i<dartResult.length; i++) {
      if (dartResult[i] === '1' && dartResult[i+1] === '0') {
          dartResult[i] = '10';
          dartResult.splice(i+1, 1);
      }
  }
  
  dartResult.forEach((x) => {
      if (x === 'S') result[c] = result[c];
      else if (x === 'D') result[c] = Math.pow(result[c], 2);
      else if (x === 'T') result[c] = Math.pow(result[c], 3);
      else if (x === '*') {
          if (c !== 0) {
              result[c-1] *= 2;
              result[c] *= 2;
          } else result[c] *= 2;
      }
      else if (x === '#') result[c] = result[c] * -1;
      else {     
          c += 1;
          result[c] = Number(x); 
      }
  })
  
  return result.reduce((x, y) => x + y, 0)
}

/*
정확성  테스트
테스트 1 〉	통과 (0.10ms, 33.4MB)
테스트 2 〉	통과 (0.11ms, 33.4MB)
테스트 3 〉	통과 (0.11ms, 33.4MB)
테스트 4 〉	통과 (0.11ms, 33.4MB)
테스트 5 〉	통과 (0.12ms, 33.4MB)
테스트 6 〉	통과 (0.11ms, 33.4MB)
테스트 7 〉	통과 (0.11ms, 33.5MB)
테스트 8 〉	통과 (0.11ms, 33.4MB)
테스트 9 〉	통과 (0.11ms, 33.5MB)
테스트 10 〉	통과 (0.11ms, 33.4MB)
테스트 11 〉	통과 (0.13ms, 33.6MB)
테스트 12 〉	통과 (0.11ms, 33.5MB)
테스트 13 〉	통과 (0.11ms, 33.5MB)
테스트 14 〉	통과 (0.11ms, 33.4MB)
테스트 15 〉	통과 (0.11ms, 33.5MB)
테스트 16 〉	통과 (0.11ms, 33.4MB)
테스트 17 〉	통과 (0.11ms, 33.5MB)
테스트 18 〉	통과 (0.11ms, 33.5MB)
테스트 19 〉	통과 (0.15ms, 33.4MB)
테스트 20 〉	통과 (0.12ms, 33.5MB)
테스트 21 〉	통과 (0.16ms, 33.5MB)
테스트 22 〉	통과 (0.19ms, 33.4MB)
테스트 23 〉	통과 (0.11ms, 33.4MB)
테스트 24 〉	통과 (0.11ms, 33.5MB)
테스트 25 〉	통과 (0.16ms, 33.6MB)
테스트 26 〉	통과 (0.19ms, 33.4MB)
테스트 27 〉	통과 (0.23ms, 33.4MB)
테스트 28 〉	통과 (0.11ms, 33.4MB)
테스트 29 〉	통과 (0.11ms, 33.4MB)
테스트 30 〉	통과 (0.11ms, 33.4MB)
테스트 31 〉	통과 (0.12ms, 33.5MB)
테스트 32 〉	통과 (0.11ms, 33.6MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/