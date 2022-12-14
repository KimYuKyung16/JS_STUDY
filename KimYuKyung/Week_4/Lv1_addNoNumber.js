function solution(numbers) {
  let sum1 = numbers.reduce((a,b) => a + b, 0);
  let sum2 = () => {
      let sum = 0;
      for (let i=1; i<=9; i++) {
          sum += i;
      }
      return sum;  
  }
  
  return sum2()-sum1
}

/*
정확성  테스트
테스트 1 〉	통과 (0.05ms, 33.4MB)
테스트 2 〉	통과 (0.05ms, 33.4MB)
테스트 3 〉	통과 (0.05ms, 33.4MB)
테스트 4 〉	통과 (0.05ms, 33.4MB)
테스트 5 〉	통과 (0.05ms, 33.4MB)
테스트 6 〉	통과 (0.07ms, 33.3MB)
테스트 7 〉	통과 (0.07ms, 33.3MB)
테스트 8 〉	통과 (0.05ms, 33.3MB)
테스트 9 〉	통과 (0.05ms, 33.3MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/