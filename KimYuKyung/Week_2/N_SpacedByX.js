function solution(x, n) {
  let answer = new Array(n).fill(0)
  
  for (i=0; i<n; i++) {
      answer[i] = x * (i+1);
  }
  
  return answer;
}