function solution(elements) {
  let answer = [];
  let start;
  let last;
  
  for (let i=1; i<elements.length; i++) {
      for (let j=0; j<elements.length; j++) {
          let sum = 0;
          
          if (j+i > elements.length) {
              sum += elements.slice(j, elements.length).reduce((acc, cur) => acc + cur, 0);    
              sum += elements.slice(0, j+i-elements.length).reduce((acc, cur) => acc + cur, 0);    
          } else {
              sum = elements.slice(j, j+i).reduce((acc, cur) => acc + cur, 0);    
          }
          answer.push(sum);
      }    
  }
  
  answer.push(elements.reduce((acc, cur) => acc + cur, 0));
  answer = [...new Set(answer)];
  return answer.length;
}

/*
정확성  테스트
테스트 1 〉	통과 (0.10ms, 33.5MB)
테스트 2 〉	통과 (23.72ms, 42.3MB)
테스트 3 〉	통과 (40.05ms, 46.6MB)
테스트 4 〉	통과 (94.49ms, 51.4MB)
테스트 5 〉	통과 (127.14ms, 59MB)
테스트 6 〉	통과 (264.71ms, 68.6MB)
테스트 7 〉	통과 (330.90ms, 76.4MB)
테스트 8 〉	통과 (437.82ms, 83.1MB)
테스트 9 〉	통과 (683.64ms, 83.5MB)
테스트 10 〉	통과 (1117.68ms, 83MB)
테스트 11 〉	통과 (181.06ms, 68.5MB)
테스트 12 〉	통과 (225.57ms, 68.7MB)
테스트 13 〉	통과 (302.38ms, 64.8MB)
테스트 14 〉	통과 (350.82ms, 75.4MB)
테스트 15 〉	통과 (442.95ms, 75.5MB)
테스트 16 〉	통과 (463.71ms, 83MB)
테스트 17 〉	통과 (702.98ms, 82.3MB)
테스트 18 〉	통과 (745.57ms, 83.7MB)
테스트 19 〉	통과 (893.37ms, 81.8MB)
테스트 20 〉	통과 (1105.83ms, 82.8MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/