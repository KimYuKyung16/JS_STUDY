function solution(n, arr1, arr2) {
  let answer = [];

  for (let i=0; i<n; i++) {
      arr1[i] = arr1[i].toString(2);
      arr2[i] = arr2[i].toString(2);
      if (arr1[i].length != n) arr1[i] = '0'.repeat(n-arr1[i].length) + arr1[i];
      if (arr2[i].length != n) arr2[i] = '0'.repeat(n-arr2[i].length) + arr2[i];
  }

  for (let i=0; i<n; i++) {
      let string = '';
      for (let j=0; j<n; j++) {
          parseInt(arr1[i][j]) || parseInt(arr2[i][j]) ? string += '#' : string += ' ';
      }
      answer.push(string);
  }

  return answer;
}

/*
정확성  테스트
테스트 1 〉	통과 (0.28ms, 33.7MB)
테스트 2 〉	통과 (0.21ms, 33.5MB)
테스트 3 〉	통과 (0.16ms, 33.6MB)
테스트 4 〉	통과 (0.18ms, 33.5MB)
테스트 5 〉	통과 (0.18ms, 33.6MB)
테스트 6 〉	통과 (0.18ms, 33.2MB)
테스트 7 〉	통과 (0.16ms, 33.3MB)
테스트 8 〉	통과 (0.11ms, 33.6MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/