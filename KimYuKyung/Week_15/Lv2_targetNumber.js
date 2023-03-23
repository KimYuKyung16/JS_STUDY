function solution(numbers, target) { 
  let stack = [];
  
  stack.push(-numbers[0]);
  stack.push(numbers[0]);
  
  for (let i=1; i<numbers.length; i++) {
      let middle = []; // stack 값에다 push해주면 stack이 빌 경우가 없기 때문에 변수 하나 추가
      while(stack.length !== 0) {
          let last_num = stack.pop();
          middle.push(last_num - numbers[i]); // 빼는 경우
          middle.push(last_num + numbers[i]); // 더하는 경우
      }
      stack = [...middle];
  }
  
  return stack.filter((x) =>  x === target).length;
}

/*
정확성  테스트
테스트 1 〉	통과 (142.53ms, 76.1MB)
테스트 2 〉	통과 (136.94ms, 84.1MB)
테스트 3 〉	통과 (0.36ms, 33.6MB)
테스트 4 〉	통과 (1.41ms, 33.5MB)
테스트 5 〉	통과 (9.39ms, 38.6MB)
테스트 6 〉	통과 (0.75ms, 33.6MB)
테스트 7 〉	통과 (0.52ms, 33.3MB)
테스트 8 〉	통과 (2.04ms, 34.1MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/