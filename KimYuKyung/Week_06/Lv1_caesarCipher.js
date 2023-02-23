function solution(s, n) {
  var answer = '';
  
  for (let i=0; i<s.length; i++) {
      let ascii = s.charCodeAt(i) + n;
      let char = String.fromCharCode(ascii);
      let flag;
      
      if (s[i] === ' ') {
          answer += ' '; // 공백일 경우
          continue;
      }
      else if (/[a-z]/.test(s[i])) flag = /[a-z]/.test(char); // 소문자일 경우
      else flag = /[A-Z]/.test(char); // 대문자일 경우
      
      if (flag) answer += char;
      else answer += String.fromCharCode(ascii-26);
  } 
  return answer;
}

/*
정확성  테스트
테스트 1 〉	통과 (0.19ms, 33.4MB)
테스트 2 〉	통과 (0.18ms, 33.5MB)
테스트 3 〉	통과 (0.21ms, 33.1MB)
테스트 4 〉	통과 (0.13ms, 33.1MB)
테스트 5 〉	통과 (0.15ms, 33.4MB)
테스트 6 〉	통과 (0.22ms, 33.5MB)
테스트 7 〉	통과 (0.22ms, 33.5MB)
테스트 8 〉	통과 (0.22ms, 33.4MB)
테스트 9 〉	통과 (0.23ms, 33.4MB)
테스트 10 〉	통과 (0.16ms, 33.5MB)
테스트 11 〉	통과 (0.23ms, 33.5MB)
테스트 12 〉	통과 (0.27ms, 33.4MB)
테스트 13 〉	통과 (45.63ms, 37.6MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/