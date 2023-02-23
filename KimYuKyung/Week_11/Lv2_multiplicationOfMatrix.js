function solution(arr1, arr2) {
  let answer = [];
  
  if (arr1.length < arr2.length) {
      let temp = arr1;
      arr1 = arr2;
      arr2 = temp;
  }
  
  for(let i=0; i<arr1.length; i++) {
      let middle = []; // 중간에 완성된 한 배열 값
      for(let j=0; j<arr1[0].length;j++) {
          let sum = 0; // 곱합 값들의 합
          for(let k=0; k<arr2.length; k++) {
              sum += (arr1[i][k] * arr2[k][j])
          }
          middle.push(sum);
      }
      answer.push(middle);
  }
  
  return answer;
}

/*
정확성  테스트
테스트 1 〉	실패 (7.06ms, 39MB)
테스트 2 〉	실패 (7.03ms, 38.6MB)
테스트 3 〉	실패 (6.77ms, 38.7MB)
테스트 4 〉	실패 (0.94ms, 33.8MB)
테스트 5 〉	실패 (4.94ms, 38.7MB)
테스트 6 〉	실패 (3.24ms, 37.9MB)
테스트 7 〉	실패 (3.28ms, 37MB)
테스트 8 〉	실패 (0.42ms, 33.7MB)
테스트 9 〉	실패 (0.37ms, 33.6MB)
테스트 10 〉	실패 (6.24ms, 38.7MB)
테스트 11 〉	실패 (3.02ms, 37MB)
테스트 12 〉	실패 (0.20ms, 33.5MB)
테스트 13 〉	실패 (6.26ms, 38.5MB)
테스트 14 〉	실패 (7.91ms, 38.8MB)
테스트 15 〉	실패 (6.31ms, 37.9MB)
테스트 16 〉	실패 (0.49ms, 33.5MB)
채점 결과
정확성: 0.0
합계: 0.0 / 100.0
*/