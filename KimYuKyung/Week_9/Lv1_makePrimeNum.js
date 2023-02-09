function solution(nums) {
  var answer = 0;
  let numList = [];
  
  for (let i=0; i<nums.length; i++) {
      for (let j=i+1; j<nums.length; j++) {
          for (let k=j+1; k<nums.length; k++) {
              numList.push(nums[i] + nums[j] + nums[k]);
          }
      }
  }
  
  // 중복 제거했더니 통과X : 소수가 되는 경우의 개수를 구하는 것이기 때문에 중복 제거하면 안됨.
  // numList[i]/2
  for (let i=0; i<numList.length; i++) {
      for (let j=2; j<Math.sqrt(numList[i])+1; j++) {
          if (numList[i]%j === 0) {
              numList[i] = 0;
              break;
          } else continue;
      }
      
      if (numList[i]) answer ++;
  }
  
  return answer;
}

/*
정확성  테스트
테스트 1 〉	통과 (2.65ms, 36.9MB)
테스트 2 〉	통과 (2.74ms, 37MB)
테스트 3 〉	통과 (0.41ms, 33.6MB)
테스트 4 〉	통과 (0.34ms, 33.6MB)
테스트 5 〉	통과 (2.72ms, 37MB)
테스트 6 〉	통과 (3.00ms, 37MB)
테스트 7 〉	통과 (0.26ms, 33.5MB)
테스트 8 〉	통과 (5.20ms, 37.5MB)
테스트 9 〉	통과 (0.70ms, 33.7MB)
테스트 10 〉	통과 (4.96ms, 37.3MB)
테스트 11 〉	통과 (0.18ms, 33.4MB)
테스트 12 〉	통과 (0.16ms, 33.5MB)
테스트 13 〉	통과 (0.19ms, 33.5MB)
테스트 14 〉	통과 (0.16ms, 33.6MB)
테스트 15 〉	통과 (0.18ms, 33.4MB)
테스트 16 〉	통과 (5.37ms, 37.5MB)
테스트 17 〉	통과 (4.38ms, 37.4MB)
테스트 18 〉	통과 (0.21ms, 33.4MB)
테스트 19 〉	통과 (0.16ms, 33.5MB)
테스트 20 〉	통과 (5.68ms, 37.5MB)
테스트 21 〉	통과 (5.39ms, 37.4MB)
테스트 22 〉	통과 (0.74ms, 33.7MB)
테스트 23 〉	통과 (0.07ms, 33.6MB)
테스트 24 〉	통과 (6.65ms, 37.5MB)
테스트 25 〉	통과 (5.46ms, 37.6MB)
테스트 26 〉	통과 (0.06ms, 33.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/