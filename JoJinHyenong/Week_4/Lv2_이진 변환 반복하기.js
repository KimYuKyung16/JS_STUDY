function solution(s) {
    var answer = [0, 0];
    let tmp = [];
    while(s.length > 1) { 
        tmp = s.split("").filter(e => e == 1);
        answer[1] += (s.length - tmp.length);
        s = tmp.length.toString(2); 
        answer[0]++;
    }
    return answer;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.07ms, 33.4MB)
// 테스트 2 〉	통과 (4.48ms, 36.9MB)
// 테스트 3 〉	통과 (0.07ms, 33.4MB)
// 테스트 4 〉	통과 (0.06ms, 33.5MB)
// 테스트 5 〉	통과 (0.06ms, 33.4MB)
// 테스트 6 〉	통과 (0.11ms, 33.5MB)
// 테스트 7 〉	통과 (0.21ms, 33.4MB)
// 테스트 8 〉	통과 (0.13ms, 33.5MB)
// 테스트 9 〉	통과 (5.97ms, 37.9MB)
// 테스트 10 〉	통과 (36.22ms, 38.1MB)
// 테스트 11 〉	통과 (4.51ms, 37.2MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0