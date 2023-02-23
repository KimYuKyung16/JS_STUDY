function solution(arr1, arr2) {
  var answer = [];
  let array = [];
  
  for (let i=0; i<arr1.length; i++) {
      for (let j=0; j<arr1[0].length; j++) {
          array.push(arr1[i][j] + arr2[i][j]);
      }
      answer.push(array);
      array = [];
  }
  
  return answer;
}

/*
정확성  테스트
테스트 1 〉	통과 (0.12ms, 33.5MB)
테스트 2 〉	통과 (0.17ms, 33.5MB)
테스트 3 〉	통과 (0.31ms, 33.7MB)
테스트 4 〉	통과 (0.21ms, 33.6MB)
테스트 5 〉	통과 (0.16ms, 33.6MB)
테스트 6 〉	통과 (0.20ms, 33.7MB)
테스트 7 〉	통과 (0.12ms, 33.5MB)
테스트 8 〉	통과 (0.18ms, 33.6MB)
테스트 9 〉	통과 (0.84ms, 38.5MB)
테스트 10 〉	통과 (0.62ms, 38.2MB)
테스트 11 〉	통과 (0.44ms, 37.8MB)
테스트 12 〉	통과 (0.53ms, 38MB)
테스트 13 〉	통과 (0.45ms, 37.9MB)
테스트 14 〉	통과 (0.58ms, 38.1MB)
테스트 15 〉	통과 (0.60ms, 38MB)
테스트 16 〉	통과 (0.57ms, 38MB)
테스트 17 〉	통과 (8.29ms, 67.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/