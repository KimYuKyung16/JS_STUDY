function solution(numbers) {
  let answer = [];
  for (let i=0; i<numbers.length; i++) {
      for (let j=i+1; j<numbers.length; j++) {
          let sum = 0;
          sum = numbers[i] + numbers[j];
          answer.push(sum);
      } 
  }
  
  answer = Array.from(new Set(answer))
  return answer.sort((a,b) => a-b);
}

/*
정확성  테스트
테스트 1 〉	통과 (0.05ms, 33.5MB)
테스트 2 〉	통과 (0.06ms, 33MB)
테스트 3 〉	통과 (0.06ms, 33.2MB)
테스트 4 〉	통과 (0.06ms, 33.5MB)
테스트 5 〉	통과 (0.15ms, 33.4MB)
테스트 6 〉	통과 (0.18ms, 33.4MB)
테스트 7 〉	통과 (0.53ms, 33.6MB)
테스트 8 〉	통과 (0.53ms, 33.6MB)
테스트 9 〉	통과 (0.45ms, 33.6MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/