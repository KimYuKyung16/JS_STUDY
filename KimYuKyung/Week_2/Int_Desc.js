function solution(n) {   
  answer = String(n).split('');
  answer.sort((a,b) => b-a);
  answer = Number(answer.join(''));
  
  return answer;
}