function solution(numbers) {
      return [...new Set(getPer(numbers))].filter(v => isPrime(v)).length;
  }
  
  const getPer = (str) => {
      const answer = [];
      const n = str.length;
      let ch = Array.from({ length: n }, () => 0);
      
      const dfs = (curStr) => {
          answer.push(+curStr);
          for (let i = 0; i < n; i++) {
              if (ch[i] === 0) {
                  ch[i] = 1;
                  dfs(curStr + str[i]);
                  ch[i] = 0;
              }
          }
      }
      dfs('');
      answer.shift();
      return answer;
  }
  
  const isPrime = (n) => {
      if (n === 0 || n === 1) return false;
      for (let i = 2; i <= Math.sqrt(n); i++) {
          if (n % i === 0) {
              return false;
          }
      }
      return true;
  }

/*
정확성  테스트
테스트 1 〉	통과 (0.25ms, 33.5MB)
테스트 2 〉	통과 (2.80ms, 37MB)
테스트 3 〉	통과 (0.15ms, 33.5MB)
테스트 4 〉	통과 (1.49ms, 36.5MB)
테스트 5 〉	통과 (5.61ms, 37MB)
테스트 6 〉	통과 (0.22ms, 33.4MB)
테스트 7 〉	통과 (0.27ms, 33.4MB)
테스트 8 〉	통과 (3.96ms, 37.1MB)
테스트 9 〉	통과 (0.24ms, 33.6MB)
테스트 10 〉	통과 (3.28ms, 37MB)
테스트 11 〉	통과 (1.22ms, 35.7MB)
테스트 12 〉	통과 (0.58ms, 33.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/
