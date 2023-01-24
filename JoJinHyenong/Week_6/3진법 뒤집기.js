function solution(n) {
    let answer = n.toString(3).split('').reverse().join('');
     return Number.parseInt(answer, 3);
 }
 // ~~진수로 바꾸는 법이 생각보다 많이 나온다. 
 // 바꾸는 방법은 .toString(진수)로 하면 된다.
 // 다시 10진수로 바꿀때는 Number.parseInt(변수,현재 진수)

//  정확성  테스트
// 테스트 1 〉	통과 (0.05ms, 33.5MB)
// 테스트 2 〉	통과 (0.04ms, 33.4MB)
// 테스트 3 〉	통과 (0.04ms, 33.5MB)
// 테스트 4 〉	통과 (0.05ms, 33.5MB)
// 테스트 5 〉	통과 (0.06ms, 33.4MB)
// 테스트 6 〉	통과 (0.05ms, 33.5MB)
// 테스트 7 〉	통과 (0.04ms, 33.5MB)
// 테스트 8 〉	통과 (0.05ms, 33.5MB)
// 테스트 9 〉	통과 (0.04ms, 33.5MB)
// 테스트 10 〉	통과 (0.27ms, 33.4MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0