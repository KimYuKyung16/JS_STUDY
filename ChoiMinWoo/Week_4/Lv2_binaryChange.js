function solution(s) {
    let answer = [0, 0];
    while (s.length > 1) {
        let a = s.match(/0/g);
        answer[0]++;
        answer[1] += a ? a.length : 0;
        s = s.replace(/0/g, "").length.toString(2);
    }
    return answer;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.08ms, 33.4MB)
// 테스트 2 〉	통과 (10.72ms, 38.5MB)
// 테스트 3 〉	통과 (0.06ms, 33.4MB)
// 테스트 4 〉	통과 (0.06ms, 33.4MB)
// 테스트 5 〉	통과 (0.10ms, 33.4MB)
// 테스트 6 〉	통과 (0.07ms, 33.6MB)
// 테스트 7 〉	통과 (0.20ms, 33.6MB)
// 테스트 8 〉	통과 (0.10ms, 33.6MB)
// 테스트 9 〉	통과 (0.97ms, 34.5MB)
// 테스트 10 〉	통과 (8.72ms, 37.2MB)
// 테스트 11 〉	통과 (8.96ms, 38.4MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
