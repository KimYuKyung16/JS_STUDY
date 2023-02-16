function solution(s) {
  let answer = 0;
  let stack = [];
  
  for(let i=0; i<s.length-1; i++) {
      if (i === 0) answer += check(s);
      s += (s[0]);
      s = s.replace(s[0], '');
      answer += check(s);
  }    
  
  return answer;
}

function check(s) {
  let stack = [];
  for(let i=0, s_length = s.length; i<s_length; i++) {
      if (s[i] === ']') {
          if (stack[stack.length-1] === '[') stack.pop();
          else return 0;
      } else if (s[i] === '}') {
          if (stack[stack.length-1] === '{') stack.pop();
          else return 0;
      } else if (s[i] === ')') {
          if (stack[stack.length-1] === '(') stack.pop();
          else return 0;
      } else {
          stack.push(s[i]);
      }
  }
  
  if (stack.length !== 0) return 0;
  else return 1;
}

/*
정확성  테스트
테스트 1 〉	통과 (6.16ms, 38MB)
테스트 2 〉	통과 (4.86ms, 37.9MB)
테스트 3 〉	통과 (4.78ms, 38MB)
테스트 4 〉	통과 (6.83ms, 37.8MB)
테스트 5 〉	통과 (9.81ms, 38.8MB)
테스트 6 〉	통과 (7.19ms, 37.9MB)
테스트 7 〉	통과 (6.98ms, 37.9MB)
테스트 8 〉	통과 (8.74ms, 38.1MB)
테스트 9 〉	통과 (12.71ms, 38.8MB)
테스트 10 〉	통과 (15.72ms, 38.8MB)
테스트 11 〉	통과 (20.19ms, 38.2MB)
테스트 12 〉	통과 (0.04ms, 33.4MB)
테스트 13 〉	통과 (0.08ms, 33.4MB)
테스트 14 〉	통과 (0.08ms, 33.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/