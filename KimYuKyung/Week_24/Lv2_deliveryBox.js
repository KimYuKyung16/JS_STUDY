function solution(order) {
  let result = [];
  let stack = [];
  let index = 0; // 택배기사의 값
  
  // order.length+1로 설정한 이유: 제일 마지막에 스택에 값이 남아있을 경우 확인해주기 위해서
  // order.length로 설정하면 스택에 남아있는 값이 택배기사 값이랑 같아도 비교를 안하고 끝남.
  for (let i=1; i<=order.length+1; i++) { // i는 영재의 index
      if (order[index] === i) { // 택배기사랑 영재랑 값이 같을 경우
          result.push(i);
          index++;
          continue;
      } 
      
      // 택배기사와 영재의 값이 같지않으면 스택에 있는 값 비교
      // -> 스택의 제일 마지막값이랑 현재 택배기사값이랑 비교
      if(stack.length && stack[stack.length-1] === order[index]) {
          while(stack.length && stack[stack.length-1] === order[index]) { // 같으면
              result.push(stack.pop());
              index++;
          } 
      }   

      stack.push(i); // 현재 영재의 값 스택에 넣어주기
  }
  
  return result.length; 
}

/*
정확성  테스트
테스트 1 〉	통과 (8.55ms, 42.4MB)
테스트 2 〉	통과 (17.25ms, 56.1MB)
테스트 3 〉	통과 (22.02ms, 73.9MB)
테스트 4 〉	통과 (18.29ms, 62.5MB)
테스트 5 〉	통과 (35.66ms, 92.7MB)
테스트 6 〉	통과 (12.40ms, 44.8MB)
테스트 7 〉	통과 (35.14ms, 79.4MB)
테스트 8 〉	통과 (5.31ms, 39.9MB)
테스트 9 〉	통과 (29.69ms, 71.9MB)
테스트 10 〉	통과 (48.01ms, 92.7MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/