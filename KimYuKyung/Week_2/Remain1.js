function solution(n) {
  let answer = 0;
  
  while(true) {
      if (n%answer === 1) return answer;
      else answer ++;
  }
}