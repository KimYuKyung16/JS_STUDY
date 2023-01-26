function solution(strings, n) {
    return strings.sort((a, b) => {
      // 인덱스 n번째 글자를 기준으로 오름차순 정렬
      if (a[n] > b[n]) return 1;
      else if (a[n] < b[n]) return -1;
      // 인덱스 n번째 글자가 같으면 사전순 정렬
      else return a > b ? 1 : -1;
    });
  }
  // sort()가 문자 전체를 비교하는것이 아니라 요소 하나하나도 비교해서 문자를 배열할 수 있다는 것을 알았다.
  
//   정확성  테스트
// 테스트 1 〉	통과 (0.05ms, 33.6MB)
// 테스트 2 〉	통과 (0.05ms, 33.6MB)
// 테스트 3 〉	통과 (0.07ms, 33.5MB)
// 테스트 4 〉	통과 (0.06ms, 33.5MB)
// 테스트 5 〉	통과 (0.05ms, 33.5MB)
// 테스트 6 〉	통과 (0.06ms, 33.5MB)
// 테스트 7 〉	통과 (0.06ms, 33.6MB)
// 테스트 8 〉	통과 (0.06ms, 33.4MB)
// 테스트 9 〉	통과 (0.05ms, 33.6MB)
// 테스트 10 〉	통과 (0.10ms, 33.6MB)
// 테스트 11 〉	통과 (0.05ms, 33.5MB)
// 테스트 12 〉	통과 (0.12ms, 33.4MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0