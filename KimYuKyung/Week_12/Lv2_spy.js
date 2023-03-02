function solution(clothes) {
  let kind_list = []; // 옷들의 종류 중복O
  let kind = []; // 옷들의 종류 중복X
  let combination = 0; // 조합 수

  for (let i=0; i<clothes.length; i++) { // 종류만 추출
      kind_list.push(clothes[i][1]);
  }
  
  kind = [...new Set(kind_list)]; // 중복 없애기

  for (let i=0; i<kind.length; i++) {
      kind[i] = kind_list.filter((x) => x === kind[i]).length + 1; // 해당 옷을 입지않을 경우가 있기 때문에 +1
  }
  
  for (let i=0; i<kind.length; i++) {
      if (kind[i] !== 0) {
          combination ? combination *= kind[i] : combination = kind[i];
      } 
  }
  
  return kind.length === 1 ? clothes.length : combination - 1; // 모든 옷을 입지 않았을 경우를 제외시키기 위해서 -1
}

/*
정확성  테스트
테스트 1 〉	통과 (0.34ms, 33.7MB)
테스트 2 〉	통과 (0.11ms, 33.5MB)
테스트 3 〉	통과 (0.19ms, 33.4MB)
테스트 4 〉	통과 (0.29ms, 33.7MB)
테스트 5 〉	통과 (0.15ms, 33.6MB)
테스트 6 〉	통과 (0.11ms, 33.5MB)
테스트 7 〉	통과 (0.21ms, 33.7MB)
테스트 8 〉	통과 (0.34ms, 33.5MB)
테스트 9 〉	통과 (0.13ms, 33.6MB)
테스트 10 〉	통과 (0.13ms, 33.5MB)
테스트 11 〉	통과 (0.10ms, 33.6MB)
테스트 12 〉	통과 (0.33ms, 33.6MB)
테스트 13 〉	통과 (0.22ms, 33.5MB)
테스트 14 〉	통과 (0.13ms, 33.5MB)
테스트 15 〉	통과 (0.09ms, 33.5MB)
테스트 16 〉	통과 (0.14ms, 33.7MB)
테스트 17 〉	통과 (0.13ms, 33.5MB)
테스트 18 〉	통과 (0.28ms, 33.5MB)
테스트 19 〉	통과 (0.19ms, 33.5MB)
테스트 20 〉	통과 (0.09ms, 33.6MB)
테스트 21 〉	통과 (0.15ms, 33.2MB)
테스트 22 〉	통과 (0.12ms, 33.5MB)
테스트 23 〉	통과 (0.13ms, 33.6MB)
테스트 24 〉	통과 (0.13ms, 33.5MB)
테스트 25 〉	통과 (0.33ms, 33.5MB)
테스트 26 〉	통과 (0.22ms, 33.6MB)
테스트 27 〉	통과 (0.14ms, 33.6MB)
테스트 28 〉	통과 (0.35ms, 33.6MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/