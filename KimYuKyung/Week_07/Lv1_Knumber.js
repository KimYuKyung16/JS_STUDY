function solution(array, commands) {
  let answer = [];
  let result = [];
  
  for(let i=0; i<commands.length; i++) {
      for(let j=(commands[i][0]-1); j<commands[i][1]; j++) {
          result.push(array[j]);
      }
      result.sort((a,b) => a-b); // sort() 그냥 쓰면 여러자리 수일 때 제대로 정렬X
      answer.push(result[commands[i][2]-1]);
      result = [];
  }
  
  return answer;
}

/*
정확성  테스트
테스트 1 〉	통과 (0.06ms, 33.5MB)
테스트 2 〉	통과 (0.08ms, 33.5MB)
테스트 3 〉	통과 (0.06ms, 33.4MB)
테스트 4 〉	통과 (0.07ms, 33.4MB)
테스트 5 〉	통과 (0.08ms, 33.4MB)
테스트 6 〉	통과 (0.07ms, 33.4MB)
테스트 7 〉	통과 (0.07ms, 33.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/